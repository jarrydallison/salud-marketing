export interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: string;
}

export const Heading = ({ as, className, children }: HeadingProps) => {
  switch (as) {
    case "h1":
      return (
        <h1
          className={`mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`mb-4 text-3xl font-extrabold md:text-4xl lg:text-5xl ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`mb-4 text-2xl font-extrabold md:text-3xl lg:text-4xl ${className}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`mb-4 text-xl font-extrabold md:text-2xl lg:text-3xl ${className}`}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`mb-4 text-lg font-extrabold md:text-xl lg:text-2xl ${className}`}
        >
          {children}
        </h5>
      );
    default:
      return (
        <h6
          className={`mb-4 text-base font-extrabold md:text-lg lg:text-xl ${className}`}
        >
          {children}
        </h6>
      );
  }
};
