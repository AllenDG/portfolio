import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function CTA() {
  return (
    <Section
      id="contact"
      className="bg-white border-t border-[#E5E5E5] py-24 lg:py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-10"
        >
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A3A3A3] block">
              Get In Touch
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-[600] tracking-[-0.04em] text-[#0F0F0F]">
              Let's connect.
            </h2>
          </div>

          <p className="text-[clamp(1rem,1.5vw,1.15rem)] font-[400] text-[#525252] max-w-2xl mx-auto leading-[1.7]">
            Let's build digital experiences that are intentional, scalable, and
            meaningful.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <motion.button
              className="px-8 py-4 bg-[#0F0F0F] text-white text-[14px] font-[500] rounded-[8px] flex items-center gap-3 shadow-xl shadow-black/5 hover:bg-[#333333] transition-colors duration-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                (window.location.href =
                  "mailto:allendeguzman.work@gmail.com")
              }
            >
              <Mail size={16} />
              Send an Email
            </motion.button>
            <motion.button
              className="px-8 py-4 border border-[#E5E5E5] text-[#0F0F0F] text-[14px] font-[500] rounded-[8px] flex items-center gap-3 hover:border-[#0F0F0F] transition-colors duration-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                window.open("https://linkedin.com/in/allendeguzman", "_blank")
              }
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </motion.button>
            <motion.button
              className="px-8 py-4 border border-[#E5E5E5] text-[#0F0F0F] text-[14px] font-[500] rounded-[8px] flex items-center gap-3 hover:border-[#0F0F0F] transition-colors duration-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                (window.location.href =
                  "mailto:allendeguzman.work@gmail.com?subject=Resume Request")
              }
            >
              Request Resume
              <Mail size={16} />
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}