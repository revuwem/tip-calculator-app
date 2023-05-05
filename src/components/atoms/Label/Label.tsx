import clsx from "clsx";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  React.PropsWithChildren & {
    className?: string;
    error?: boolean;
  };

const Label: React.FC<LabelProps> = ({
  className = "",
  error = false,
  children,
  ...props
}) => {
  return (
    <label
      className={clsx(
        "text-sm inline-block mb-2",
        {
          "text-cyan-grayish": !error,
          "text-orange": error,
        },
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
