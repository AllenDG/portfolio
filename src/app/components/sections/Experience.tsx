import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Experience() {
  const jobs = [
    {
      role: "UI/UX Designer",
      company: "Magsaysay People Resources (Magsaysay Maritime Corporation)",
      type: "Full-time · On-site",
      location: "Manila, NCR, Philippines",
      period: "Oct 2025 — Present",
      contributions: [
        "Lead user-centered system design for enterprise-level digital platforms",
        "Designed responsive websites and mobile applications using Figma, FigJam, and Figma Make",
        "Applied prompt engineering and AI tools (Amazon Q, Claude, ChatGPT) to streamline workflows and accelerate design iteration",
        "Contributed to frontend implementation using ASP.NET, HTML, CSS, JavaScript, jQuery, and Bootstrap",
        "Ensured scalable, consistent, and accessible digital experiences across devices",
      ],
    },
    {
      role: "UI/UX Developer",
      company: "Freelance",
      type: "Remote",
      location: "",
      period: "Aug 2023 — Aug 2025",
      contributions: [
        "Delivered intuitive UI systems and structured UX flows for multiple clients",
        "Collaborated with frontend teams using React to ship production-ready interfaces",
        "Managed parallel projects while maintaining quality, timelines, and client satisfaction",
        "Translated user needs into functional, conversion-driven design solutions",
      ],
    },
    {
      role: "UI/UX Designer Intern",
      company: "Magsaysay People Resources (Magsaysay Maritime Corporation)",
      type: "Internship",
      location: "",
      period: "Jan 2025 — Apr 2025",
      contributions: [
        "Designed conversational UI for AI chatbot systems",
        "Improved engagement through structured UX flows and interface refinement",
        "Participated in Agile workflows, sprint planning, and iterative validation",
      ],
    },
  ];

  return (
    <Section id="experience" className="bg-white border-y border-[#E5E5E5]">
      <Container>
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="w-full md:w-1/3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3] block">
              Career Path
            </span>
            <h2 className="mt-4 mb-5 text-[clamp(1.8rem,3.5vw,2.8rem)] font-[600] tracking-[-0.03em] text-[#0F0F0F]">
              Professional Experience
            </h2>
            <p className="text-[#525252] text-[15px] leading-[1.7] font-[400] mb-8 max-w-sm">
              A background in both design and development allows me to bridge
              the gap between creative vision and technical execution.
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:allendeguzman.work@gmail.com?subject=Resume Request")
              }
              className="text-[#0F0F0F] text-[14px] font-[500] border-b border-[#0F0F0F] pb-1 hover:pb-2 transition-all flex items-center gap-2 group"
            >
              Request Full Resume
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="w-full md:w-2/3 space-y-0 relative border-l border-[#E5E5E5] pl-10 md:pl-14">
            {jobs.map((job, index) => (
              <motion.div
                key={job.role + job.company}
                className="relative group py-8 first:pt-0 last:pb-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[46px] md:-left-[60px] top-[10px] first:top-0 w-2.5 h-2.5 bg-white border border-[#D4D4D4] rounded-[3px] group-hover:bg-[#0F0F0F] group-hover:border-[#0F0F0F] transition-all duration-300" />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-[18px] font-[600] text-[#0F0F0F] tracking-[-0.01em] group-hover:translate-x-1 transition-transform">
                    {job.role}
                  </h3>
                  <span className="text-[11px] text-[#A3A3A3] uppercase tracking-[0.1em] mt-1 md:mt-0">
                    {job.period}
                  </span>
                </div>

                <p className="text-[14px] text-[#0F0F0F] font-[500] mb-1 opacity-70">
                  {job.company}
                </p>
                <p className="text-[12px] text-[#A3A3A3] mb-4">
                  {job.type}
                  {job.location ? ` · ${job.location}` : ""}
                </p>

                <ul className="space-y-2">
                  {job.contributions.map((item, i) => (
                    <li
                      key={i}
                      className="text-[14px] text-[#737373] leading-[1.7] font-[400] flex gap-3"
                    >
                      <span className="w-1 h-1 bg-[#D4D4D4] rounded-[1px] shrink-0 mt-[10px]" />
                      {item}
                    </li>
                  ))}
                </ul>

                {index < jobs.length - 1 && (
                  <div className="w-full h-[1px] bg-[#F0F0F0] mt-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}