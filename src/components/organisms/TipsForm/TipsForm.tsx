import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import RadioInput from "../../atoms/RadioInput";
import Field from "../../molecules/Field";
import FieldSet from "../../molecules/FieldSet";
import Total from "../../molecules/Total";
import DollarIcon from "../../../assets/icon-dollar.svg";
import PersonIcon from "../../../assets/icon-person.svg";

type TipsForm = {};

const tipOptions = [
  { value: 5 },
  { value: 10 },
  { value: 15 },
  { value: 25 },
  { value: 50 },
];

const TipsForm: React.FC<TipsForm> = () => {
  return (
    <form
      action=""
      className="p-8 xl:p-9 xl:pr-6 grid gap-8 xl:grid-cols-2 bg-white rounded-2xl shadow shadow-cyan-light-grayish"
    >
      <div className="grid gap-8">
        <Field
          displayedLabel="Bill"
          id="bill"
          name="bill"
          icon={<DollarIcon />}
          placeholder="0"
        />
        <FieldSet>
          <FieldSet.Legend>Select tips %</FieldSet.Legend>
          {tipOptions.map((opt) => (
            <RadioInput
              displayedLabel={`${opt.value}%`}
              id={`tip-${opt.value}`}
              name="tips"
            />
          ))}
          <Input
            aria-label="Custom"
            placeholder="Custom"
            id="tip-custom"
            name="tips"
          />
        </FieldSet>
        <Field
          displayedLabel="Number of People"
          id="people"
          name="people"
          error="Can't be zero"
          icon={<PersonIcon />}
          placeholder="0"
        />
      </div>
      <div className="py-8 px-8 flex flex-col bg-cyan-dark rounded-xl">
        <Total name="Tip Amount" value="0.00" />
        <Total name="Total" value="0.00" />
        <Button type="reset" disabled className="mt-auto">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default TipsForm;
