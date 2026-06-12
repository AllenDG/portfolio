import { ReactNode } from "react";
import { motion } from "motion/react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
  return (
    <motion.div 
      className={`bg-white border border-[#E5E5E5] rounded-[8px] p-6 overflow-hidden transition-colors duration-200 hover:border-[#0F0F0F] cursor-pointer ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}