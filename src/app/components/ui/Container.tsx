import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-4 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
