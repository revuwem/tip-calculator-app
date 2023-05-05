import clsx from "clsx";

type RadioInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  displayedLabel: string;
};

const RadioInput: React.FC<RadioInputProps> = ({
  displayedLabel,
  ...props
}) => {
  return (
    <label htmlFor={props.id}>
      <input type="radio" className="sr-only peer " {...props} />
      <span
        role="presentation"
        className={clsx(
          "block p-2 text-2xl text-white text-center bg-cyan-dark rounded transition",
          "hover:text-cyan-dark hover:bg-cyan-light hover:cursor-pointer",
          "peer-focus:ring peer-focus:ring-2 peer-focus:ring-cyan-strong",
          "peer-checked:text-cyan-dark peer-checked:bg-cyan-strong"
        )}
      >
        {displayedLabel}
      </span>
    </label>
  );
};

export default RadioInput;
