import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "accent" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  accent: "bg-accent text-white hover:bg-accent/90",
  link: "bg-transparent text-primary hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon: Icon,
  iconPosition = "left",
  className = "",
  href,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded transition-colors duration-200";
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {Icon && iconPosition === "left" && <Icon className="mr-2" size={16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="ml-2" size={16} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={isLoading} {...props}>
      {content}
    </button>
  );
};

export const IconButton: React.FC<
  Omit<ButtonProps, "children"> & { icon: LucideIcon }
> = ({ icon: Icon, ...props }) => {
  return (
    <Button {...props}>
      <Icon size={20} />
    </Button>
  );
};
