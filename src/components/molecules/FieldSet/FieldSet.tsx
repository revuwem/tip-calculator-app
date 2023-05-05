import Legend from "../../atoms/Legend";

type FieldSetProps = React.PropsWithChildren & {};
type FieldSetComponent = React.FC<FieldSetProps> & { Legend: FieldSetLegend };

const FieldSet: FieldSetComponent = ({ children }) => {
  return <fieldset className="grid grid-cols-3 gap-3">{children}</fieldset>;
};

type FieldSetLegend = typeof Legend;
FieldSet.Legend = Legend;

export default FieldSet;
