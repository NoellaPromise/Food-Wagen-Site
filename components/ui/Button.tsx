import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "accent" | "secondary" | "danger";
type ButtonSize = "sm" | "md";
type ButtonRadius = "md" | "lg" | "full";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const base =
  "inline-flex items-center justify-center font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed";

const sizeMap: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3",
};

const radiusMap: Record<ButtonRadius, string> = {
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const variantMap: Record<ButtonVariant, string> = {
  primary: "food-button-primary text-white",
  accent: "text-white",
  secondary: "food-button-secondary",
  danger: "food-button-danger",
};

export default function Button({
  variant = "primary",
  size = "md",
  radius = "md",
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    base,
    sizeMap[size],
    radiusMap[radius],
    variantMap[variant],
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const style =
    variant === "accent" ? { backgroundColor: "#FF6B3D" } : undefined;

  return (
    <button className={classes} style={style} {...props}>
      {leftIcon ? <span className="mr-2">{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span className="ml-2">{rightIcon}</span> : null}
    </button>
  );
}
