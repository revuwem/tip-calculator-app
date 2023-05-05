import Input, { InputProps } from "../../atoms/Input";
import Label from "../../atoms/Label";

type FieldProps = InputProps & {
  displayedLabel: string;
  error?: boolean;
};

const Field: React.FC<FieldProps> = ({
  displayedLabel,
  error = false,
  ...props
}) => {
  return (
    <div>
      <Label htmlFor={props.id}>{displayedLabel}</Label>
      {error && <Label error>{error}</Label>}
      <Input {...props} />
    </div>
  );
};

export default Field;
