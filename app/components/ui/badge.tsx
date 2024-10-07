import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const colorClasses = {
    default: "bg-gray-100 text-foreground",
    primary: "bg-primary text-background",
    secondary: "bg-secondary text-background",
    success: "bg-success text-background",
    warning: "bg-warning text-background",
    danger: "bg-danger text-background",
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        px-1.5 sm:px-2.5 py-0.5
        rounded-full
        text-2xs sm:text-xs font-medium
        leading-none
        whitespace-nowrap
        ${colorClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
