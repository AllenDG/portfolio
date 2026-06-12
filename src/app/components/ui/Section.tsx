import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "primary" | "secondary";
}

export function Section({ children, id, className = "", background = "primary" }: SectionProps) {
  return (
    <section 
      id={id}
      className={`py-16 lg:py-24 ${background === "primary" ? "bg-[#FFFFFF]" : "bg-[#FAFAFA]"} ${className}`}
    >
      {children}
    </section>
  );
}
