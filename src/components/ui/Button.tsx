import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-dark focus-visible:ring-brand",
  secondary:
    "bg-white text-brand border border-brand-light hover:bg-brand-light/40 focus-visible:ring-brand-light",
  ghost:
    "bg-transparent text-slate-800 hover:bg-slate-100 focus-visible:ring-slate-300",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
