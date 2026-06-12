import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function H1({ children, className = "", as: Component = "h1" }: TypographyProps) {
  return (
    <Component className={`text-[42px] font-semibold leading-[120%] tracking-tight text-[#0F0F0F] ${className}`}>
      {children}
    </Component>
  );
}

export function H2({ children, className = "", as: Component = "h2" }: TypographyProps) {
  return (
    <Component className={`text-[30px] font-semibold leading-[125%] text-[#0F0F0F] ${className}`}>
      {children}
    </Component>
  );
}

export function H3({ children, className = "", as: Component = "h3" }: TypographyProps) {
  return (
    <Component className={`text-[22px] font-medium leading-[130%] text-[#0F0F0F] ${className}`}>
      {children}
    </Component>
  );
}

export function BodyLarge({ children, className = "", as: Component = "p" }: TypographyProps) {
  return (
    <Component className={`text-[16px] font-normal leading-[150%] text-[#525252] ${className}`}>
      {children}
    </Component>
  );
}

export function Body({ children, className = "", as: Component = "p" }: TypographyProps) {
  return (
    <Component className={`text-[15px] font-normal leading-[160%] text-[#525252] ${className}`}>
      {children}
    </Component>
  );
}

export function Small({ children, className = "", as: Component = "p" }: TypographyProps) {
  return (
    <Component className={`text-[13px] font-normal leading-[160%] text-[#737373] ${className}`}>
      {children}
    </Component>
  );
}
