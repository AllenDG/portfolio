import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { motion } from "motion/react";

export function About() {
  return (
    <Section
      id="about"
      className="bg-[#FAFAFA] border-t border-[#E5E5E5] py-24 lg:py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A3A3A3] block">
            About Me
          </span>

          <div className="space-y-6">
            <p className="text-[clamp(1.1rem,2.5vw,1.35rem)] font-[400] leading-[1.8] tracking-[-0.01em] text-[#525252]">
              I am a UI/UX Designer who bridges design strategy and frontend
              execution. My work focuses on building structured, scalable, and
              accessible digital systems that prioritize clarity, performance,
              and long-term maintainability.
            </p>

            <h2 className="text-[clamp(1.4rem,3.5vw,2.8rem)] font-[400] leading-[1.5] tracking-[-0.02em] text-[#0F0F0F]">
              "I believe great design is not decoration — it is{" "}
              <span className="text-[#0F0F0F] font-[500]">
                structured problem solving
              </span>
              ."
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-16 text-left">
            {[
              {
                title: "Clarity",
                desc: "Over decoration. Every element must serve a purpose and communicate with precision.",
              },
              {
                title: "Systems",
                desc: "Over randomness. Scalable foundations create consistent, maintainable experiences.",
              },
              {
                title: "Execution",
                desc: "Over intention. Ideas are cheap; shipping well-crafted solutions is everything.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="pl-6 border-l border-[#E5E5E5] hover:border-[#0F0F0F] transition-colors duration-500 group"
              >
                <h3 className="text-[18px] font-[600] text-[#0F0F0F] mb-2 group-hover:translate-x-2 transition-transform tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#737373] leading-[1.7] font-[400]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}