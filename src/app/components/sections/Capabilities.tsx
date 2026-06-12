import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Figma, Code2, Cpu, Wrench } from "lucide-react";
import { motion } from "motion/react";

export function Capabilities() {
  const categories = [
    {
      title: "Design & UX",
      icon: Figma,
      skills: [
        "UX Research",
        "User Story Mapping",
        "Storytelling",
        "Wireframing & Prototyping",
        "Accessibility Principles",
        "Design Systems",
      ],
    },
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "ASP.NET Core",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Figma",
        "FigJam",
        "Figma Make",
        "Amazon Q",
        "Claude",
        "ChatGPT",
        "MCP Integration",
        "Kiro",
      ],
    },
    {
      title: "Specialized",
      icon: Cpu,
      skills: [
        "Prompt Engineering",
        "AI-Assisted Workflow Optimization",
        "System Design Thinking",
      ],
    },
  ];

  return (
    <Section id="capabilities" className="bg-white">
      <Container>
        <div className="text-center mb-14 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3] block">
            Core Competencies
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-[600] tracking-[-0.03em] text-[#0F0F0F]">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="p-7 border border-[#E5E5E5] rounded-[8px] hover:border-[#333333] transition-all duration-500 group bg-[#FAFAFA] hover:bg-white hover:shadow-lg hover:shadow-black/[0.03]"
            >
              <div className="mb-6 w-11 h-11 flex items-center justify-center bg-white border border-[#E5E5E5] rounded-[8px] group-hover:bg-[#0F0F0F] group-hover:text-white transition-all duration-300 shadow-sm">
                <cat.icon size={20} strokeWidth={1.5} />
              </div>

              <h3 className="text-[16px] font-[600] text-[#0F0F0F] mb-5 tracking-[-0.01em] group-hover:translate-x-1 transition-transform">
                {cat.title}
              </h3>

              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[13px] text-[#737373] flex items-center gap-3 group-hover:text-[#525252] transition-colors"
                  >
                    <span className="w-1 h-1 bg-[#D4D4D4] rounded-[1px] group-hover:bg-[#0F0F0F] transition-colors duration-300 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}