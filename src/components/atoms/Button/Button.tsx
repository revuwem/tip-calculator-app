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
        "block pt-4 pb-3 px-6 text-base uppercase bg-cyan-strong text-cyan-dark rounded transition",
        "hover:bg-cyan-light",
        "focus:bg-cyan-light",
        "disabled:opacity-30",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
