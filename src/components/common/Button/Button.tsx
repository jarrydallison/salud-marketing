export interface ButtonProps {
  children: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({ className, children, onClick }: ButtonProps) => (
  <button className={`px-4 py-2 ${className}`} onClick={onClick}>
    {children}
  </button>
);
