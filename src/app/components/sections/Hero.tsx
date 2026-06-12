import { Container } from "../ui/Container";
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const traits = [
  "Detail-Oriented",
  "Systems Thinker",
  "UX Strategist",
  "Problem Solver",
  "Code-Literate",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "3", label: "Design Systems" },
];

const skillTags = [
  "Figma",
  "React",
  "ASP.NET",
  "Prompt Eng.",
  "A11y",
  "UX Research",
];

export function Hero() {
  const [activeTraitIndex, setActiveTraitIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTraitIndex((prev) => (prev + 1) % traits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 lg:pt-0 lg:pb-0">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#0F0F0F 1px, transparent 1px), linear-gradient(90deg, #0F0F0F 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
          {/* Left: Main headline */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main title - reduced font size */}
              <h1 className="text-[#0F0F0F] tracking-[-0.04em] leading-[1.05]">
                <motion.span
                  className="block text-[clamp(2rem,5.5vw,4.2rem)] font-[600]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  Designing
                </motion.span>
                <motion.span
                  className="block text-[clamp(2rem,5.5vw,4.2rem)] font-[600] text-[#525252]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  scalable
                </motion.span>
                <motion.span
                  className="block text-[clamp(2rem,5.5vw,4.2rem)] font-[600]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  systems<span className="text-[#737373]">.</span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle - reduced */}
            <motion.p
              className="text-[#525252] text-[clamp(0.9rem,1.5vw,1.1rem)] max-w-lg leading-[1.7] font-[400]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Designing scalable, user-centered digital systems that merge
              strategic UX thinking with clean frontend execution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                className="px-7 py-3.5 bg-[#0F0F0F] text-white text-[13px] font-[500] rounded-[8px] flex items-center gap-3 group hover:bg-[#333333] transition-colors duration-400"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Selected Projects
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>
              <motion.button
                className="px-7 py-3.5 border border-[#E5E5E5] text-[#0F0F0F] text-[13px] font-[500] rounded-[8px] flex items-center gap-3 hover:border-[#0F0F0F] transition-colors duration-400"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  (window.location.href =
                    "mailto:allendeguzman.work@gmail.com?subject=Resume Request")
                }
              >
                Request Resume
                <Mail size={15} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Profile card */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full max-w-[380px] relative">
              {/* Main card */}
              <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-[10px] overflow-hidden">
                {/* Card header with monochrome gradient */}
                <div className="h-32 relative overflow-hidden" style={{
                  background: "linear-gradient(135deg, #737373 0%, #333333 50%, #0F0F0F 100%)"
                }}>
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0), radial-gradient(circle at 1px 1px, #A3A3A3 1px, transparent 0), radial-gradient(circle at 1px 1px, #0F0F0F 1px, transparent 0)",
                      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
                      backgroundPosition: "0px 0px, 10px 0px, 5px 10px",
                    }}
                  />
                  {/* Decorative lines */}
                  <motion.div
                    className="absolute top-6 right-6 w-16 h-[1px] bg-white/20"
                    animate={{ width: [64, 40, 64] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute top-10 right-6 w-10 h-[1px] bg-white/15"
                    animate={{ width: [40, 64, 40] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 w-8 h-[1px] bg-white/10"
                    animate={{ width: [32, 48, 32] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </div>

                {/* Card body */}
                <div className="p-6 space-y-6">
                  {/* Name & role */}
                  <div className="space-y-1">
                    <h3 className="text-[18px] font-[600] tracking-[-0.02em] text-[#0F0F0F]">
                      Allen De Guzman
                    </h3>
                    <p className="text-[12px] text-[#737373] font-[400]">
                      UI/UX Designer & Frontend Developer
                    </p>
                  </div>

                  {/* Rotating trait */}
                  <div className="h-9 flex items-center border border-[#E5E5E5] rounded-[6px] px-3 bg-white overflow-hidden">
                    <span className="text-[10px] text-[#737373] uppercase tracking-[0.1em] mr-3 shrink-0">
                      Trait
                    </span>
                    <div className="relative flex-1 h-full flex items-center overflow-hidden">
                      {traits.map((trait, index) => (
                        <motion.span
                          key={trait}
                          className="absolute text-[12px] font-[500] text-[#0F0F0F]"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: activeTraitIndex === index ? 0 : -20,
                            opacity: activeTraitIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          {trait}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      >
                        <span className="block text-[20px] font-[600] tracking-[-0.02em] text-[#0F0F0F]">
                          {stat.value}
                        </span>
                        <span className="text-[9px] text-[#A3A3A3] uppercase tracking-[0.05em] leading-tight block mt-1">
                          {stat.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Focus areas */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {skillTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-2.5 py-1 bg-white border border-[#E5E5E5] rounded-[4px] text-[#737373] uppercase tracking-[0.04em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3]">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-6 bg-[#D4D4D4]"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}