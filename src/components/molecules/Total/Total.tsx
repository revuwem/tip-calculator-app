type TotalProps = {
  name: string;
  value: string;
};

const Total: React.FC<TotalProps> = ({ name, value }) => {
  return (
    <section className="flex justify-between mb-8 gap-4">
      <h4 className="text-sm text-white shrink-0">
        {name} <span className="block text-xs text-cyan-grayish">/ person</span>
      </h4>
      <p className="text-4xl text-cyan-strong overflow-x-auto">${value}</p>
    </section>
  );
};

export default Total;
