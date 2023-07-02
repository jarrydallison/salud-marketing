export interface ButtonProps {
  children: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({ className, children, onClick }: ButtonProps) => (
  <button className={`rounded-xl bg-white p-4 ${className}`} onClick={onClick}>
    {children}
  </button>
);
