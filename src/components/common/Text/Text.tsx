export const Text = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => <p className={`text-homeText ${className}`}>{children}</p>;
