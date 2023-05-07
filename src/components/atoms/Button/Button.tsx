import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren & {
    className?: string;
  };

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "block w-full pt-4 pb-3 px-6 text-base uppercase bg-cyan-strong text-cyan-dark rounded transition",
        "hover:bg-cyan-light",
        "focus:bg-cyan-light focus:outline-cyan-strong focus:outline-offset-2",
        "disabled:opacity-30 disabled:hover:bg-cyan-strong",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
