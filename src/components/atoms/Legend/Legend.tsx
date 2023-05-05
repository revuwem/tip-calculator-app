type LegendProps = React.PropsWithChildren & {};

const Legend: React.FC<LegendProps> = ({ children }) => {
  return <legend className="text-sm text-cyan-grayish">{children}</legend>;
};

export default Legend;
