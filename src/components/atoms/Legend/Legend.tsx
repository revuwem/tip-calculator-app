type LegendProps = React.PropsWithChildren & {};

const Legend: React.FC<LegendProps> = ({ children }) => {
  return <legend className="text-sm text-cyan-grayish mb-2">{children}</legend>;
};

export default Legend;
