import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import RadioInput from "../../atoms/RadioInput";
import Field from "../../molecules/Field";
import FieldSet from "../../molecules/FieldSet";
import Total from "../../molecules/Total";
import DollarIcon from "../../../assets/icon-dollar.svg";
import PersonIcon from "../../../assets/icon-person.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useMemo, useState } from "react";
import { getTipsTotal } from "../../../lib/getTipsTotal";

type TipsForm = {};

interface ITipsFormValues {
  bill: number | "";
  tips?: number | ""; // radio buttons
  customTips?: number | ""; // input
  people: number | "";
}

const validationSchema: Yup.ObjectSchema<ITipsFormValues> = Yup.object().shape({
  bill: Yup.number()
    .typeError("You must specify a number")
    .min(1, "Can't be zero")
    .nullable()
    .required("This field is required"),
  tips: Yup.number(),
  customTips: Yup.number(),
  people: Yup.number()
    .typeError("You must specify a number")
    .min(1, "Can't be zero")
    .nullable()
    .required("This field is required"),
});

const tipOptions = [
  { value: 5 },
  { value: 10 },
  { value: 15 },
  { value: 25 },
  { value: 50 },
];

const TipsForm: React.FC<TipsForm> = () => {
  const form = useFormik<ITipsFormValues>({
    initialValues: {
      bill: "",
      tips: "",
      customTips: "",
      people: "",
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    // Fake error to prevent form.isValid to be true after initialValues validation on mount.
    initialErrors: {
      bill: "Can't be zero",
    },
    onSubmit: ({ bill, tips, customTips, people }) => {
      const realTips = tips || customTips;

      const { tipAmount, total } = getTipsTotal(
        Number(bill),
        Number(realTips),
        Number(people)
      );

      setTotalState(tipAmount, total);
    },
    onReset: () => {
      resetTotalState();
    },
  });

  const [tipAmount, setTipAmount] = useState<string>("0.00");
  const [total, setTotal] = useState<string>("0.00");

  const setTotalState = (tipAmount: string, total: string) => {
    setTipAmount(tipAmount);
    setTotal(total);
  };

  const resetTotalState = () => {
    setTipAmount("0.00");
    setTotal("0.00");
  };

  useEffect(() => {
    if (form.isValid) {
      form.handleSubmit();
    } else {
      resetTotalState();
    }
  }, [form.values, form.isValid]);

  return (
    <form
      action=""
      onReset={form.handleReset}
      className="p-8 xl:p-9 xl:pr-6 grid gap-8 xl:grid-cols-2 bg-white rounded-2xl shadow shadow-cyan-light-grayish"
    >
      <div className="grid gap-8">
        <Field
          displayedLabel="Bill"
          id="bill"
          name="bill"
          icon={<DollarIcon />}
          placeholder="0"
          onChange={form.handleChange}
          value={form.values.bill}
          onBlur={form.handleBlur}
          error={
            form.touched.bill && form.errors.bill ? form.errors.bill : undefined
          }
        />
        <FieldSet>
          <FieldSet.Legend>Select tips %</FieldSet.Legend>
          {tipOptions.map((opt) => (
            <RadioInput
              key={`tip-${opt.value}`}
              displayedLabel={`${opt.value}%`}
              id={`tip-${opt.value}`}
              name="tips"
              value={opt.value}
              onBlur={form.handleBlur}
              onChange={(e) => {
                form.setFieldValue("customTips", "");
                form.handleChange(e);
              }}
              checked={
                String(form.values.tips).length > 0 &&
                form.values.tips == opt.value
              }
            />
          ))}
          <Input
            aria-label="Custom"
            placeholder="Custom"
            id="tip-custom"
            name="customTips"
            value={form.values.customTips}
            onFocus={() => form.setFieldValue("tips", "")}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            error={!!(form.touched.customTips && form.errors.customTips)}
          />
        </FieldSet>
        <Field
          displayedLabel="Number of People"
          id="people"
          name="people"
          icon={<PersonIcon />}
          placeholder="0"
          onBlur={form.handleBlur}
          onChange={form.handleChange}
          value={form.values.people}
          error={
            form.touched.people && form.errors.people
              ? form.errors.people
              : undefined
          }
        />
      </div>
      <div className="py-8 px-8 flex flex-col bg-cyan-dark rounded-xl">
        <Total name="Tip Amount" value={tipAmount} />
        <Total name="Total" value={total} />
        <Button
          type="reset"
          disabled={!form.isValid}
          className="mt-auto"
          onClick={form.handleReset}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default TipsForm;
