import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ className = "", icon, ...props }) => {
  return (
    <div className="relative">
      <input
        className={clsx(
          "py-1 px-3 pl-8 text-2xl text-right text-cyan-dark bg-cyan-very-light-grayish rounded transition",
          "hover:outline hover:outline-2 hover:outline-cyan-strong hover:cursor-pointer",
          "focus:outline focus:outline-2 focus:outline-cyan-strong",
          className
        )}
        {...props}
      />
      {icon && (
        <div className="absolute inset-0 w-3 aspect-square p-3">{icon}</div>
      )}
    </div>
  );
};

export default Input;
