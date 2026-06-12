import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-[15px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#000000] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-[8px]";
  
  const variants = {
    primary: "bg-[#0F0F0F] text-white hover:bg-[#262626]",
    secondary: "bg-[#FAFAFA] text-[#0F0F0F] border border-[#E5E5E5] hover:bg-[#F2F2F2] hover:border-[#D4D4D4]",
    outline: "bg-transparent text-[#0F0F0F] border border-[#E5E5E5] hover:border-[#0F0F0F]",
    ghost: "bg-transparent text-[#525252] hover:text-[#0F0F0F] hover:bg-[#FAFAFA]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}