import { Container } from "../components/ui/Container";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Container>
        <motion.div
          className="text-center space-y-6 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] text-[#A3A3A3] uppercase tracking-[0.2em] block">
            Error
          </span>
          <h2 className="text-[72px] font-[600] tracking-[-0.04em] text-[#0F0F0F]">
            404
          </h2>
          <p className="text-[16px] text-[#525252] leading-[1.7] font-[400]">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <motion.button
            onClick={() => navigate("/")}
            className="mt-6 px-8 py-3.5 bg-[#0F0F0F] text-white text-[14px] font-[500] rounded-[8px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </Container>
    </div>
  );
}