import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  icon?: React.ReactNode;
  error?: boolean;
};

const Input: React.FC<InputProps> = ({
  className = "",
  icon = null,
  error = false,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        className={clsx(
          "w-full py-2 px-4 text-2xl text-right text-cyan-dark bg-cyan-very-light-grayish rounded transition",
          "hover:outline hover:outline-2 hover:outline-cyan-strong hover:cursor-pointer",
          "focus:outline focus:outline-2 focus:outline-cyan-strong",
          { "pl-10": icon },
          { "outline outline-2 outline-orange": error },
          className
        )}
        {...props}
      />
      {icon && (
        <div className="absolute inset-0 w-3 aspect-square p-4">{icon}</div>
      )}
    </div>
  );
};

export default Input;
