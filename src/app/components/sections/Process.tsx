import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { motion } from "motion/react";
import { Search, Target, PenTool, FlaskConical, Package, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export function Process() {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Search,
      title: "Discover",
      desc: "Stakeholder alignment, user interviews, research synthesis",
      num: "01",
    },
    {
      icon: Target,
      title: "Define",
      desc: "User stories, problem framing, journey mapping",
      num: "02",
    },
    {
      icon: PenTool,
      title: "Design",
      desc: "Wireframes, high-fidelity prototypes, accessibility checks",
      num: "03",
    },
    {
      icon: FlaskConical,
      title: "Validate",
      desc: "Usability testing, iteration, refinement",
      num: "04",
    },
    {
      icon: Package,
      title: "Deliver",
      desc: "Developer-ready files, documentation, component structure",
      num: "05",
    },
    {
      icon: TrendingUp,
      title: "Optimize",
      desc: "Post-launch improvements and performance evaluation",
      num: "06",
    },
  ];

  return (
    <Section id="process" className="bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4 max-w-lg">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3] block">
              Methodology
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-[600] tracking-[-0.03em] text-[#0F0F0F]">
              Design Process
            </h2>
            <p className="text-[#525252] text-[16px] leading-[1.7] font-[400]">
              A rigorous, cyclical process that ensures every pixel has a
              purpose and every interaction is intentional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-5 relative mt-12">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[1px] bg-[#E5E5E5] z-0" />

          {/* Animated progress line */}
          <motion.div
            className="hidden lg:block absolute top-[28px] left-[8%] h-[1px] bg-[#0F0F0F] z-[1] origin-left"
            animate={{
              width: `${Math.max(0, (activeStep / 5) * 84)}%`,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const isPast = activeStep > index;

            return (
              <motion.div
                key={step.title}
                className="relative z-10 flex flex-col items-center text-center gap-5 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-14 h-14 rounded-[10px] flex items-center justify-center shadow-sm border"
                  animate={{
                    backgroundColor: isActive ? "#0F0F0F" : isPast ? "#333333" : "#FFFFFF",
                    borderColor: isActive ? "#0F0F0F" : isPast ? "#333333" : "#E5E5E5",
                    scale: isActive ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.div
                    animate={{
                      color: isActive || isPast ? "#FFFFFF" : "#0F0F0F",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon
                      size={20}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </motion.div>

                <div className="space-y-2">
                  <motion.span
                    className="text-[10px] block"
                    animate={{
                      color: isActive ? "#0F0F0F" : "#737373",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.num}
                  </motion.span>
                  <motion.h3
                    className="text-[16px] font-[600]"
                    animate={{
                      color: isActive ? "#0F0F0F" : isPast ? "#333333" : "#0F0F0F",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-[12px] leading-[1.6] max-w-[150px] mx-auto"
                    animate={{
                      color: isActive ? "#525252" : "#737373",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.desc}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}