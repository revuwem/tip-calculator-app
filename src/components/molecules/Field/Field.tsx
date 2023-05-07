import Input, { InputProps } from "../../atoms/Input";
import Label from "../../atoms/Label";

type FieldProps = Omit<InputProps, "error"> & {
  displayedLabel: string;
  error?: string;
};

const Field: React.FC<FieldProps> = ({
  displayedLabel,
  error = "",
  ...props
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <Label htmlFor={props.id}>{displayedLabel}</Label>
        {error && <Label error>{error}</Label>}
      </div>
      <Input {...props} error={!!error} />
    </div>
  );
};

export default Field;
