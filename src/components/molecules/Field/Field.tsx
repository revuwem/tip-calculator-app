import Input, { InputProps } from "../../atoms/Input";
import Label from "../../atoms/Label";

type FieldProps = InputProps & {
  displayedLabel: string;
  error?: string;
};

const Field: React.FC<FieldProps> = ({
  displayedLabel,
  error = false,
  ...props
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <Label htmlFor={props.id}>{displayedLabel}</Label>
        {error && <Label error>{error}</Label>}
      </div>
      <Input {...props} />
    </div>
  );
};

export default Field;
