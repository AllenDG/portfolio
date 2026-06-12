import { Container } from "../ui/Container";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Section } from "../ui/Section";
import { projects } from "../../data/projects";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowUpRight } from "lucide-react";

export function WorkGrid() {
  const navigate = useNavigate();

  return (
    <Section id="work" className="border-t border-[#E5E5E5] bg-white">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex justify-between items-end border-b border-[#E5E5E5] pb-8">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3] block">
                Portfolio
              </span>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-[600] tracking-[-0.03em] text-[#0F0F0F]">
                Selected Projects
              </h2>
            </div>
            <span className="hidden md:block text-[12px] text-[#A3A3A3]">
              2024 — 2026
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 lg:gap-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-[8px] relative mb-5">
                    <div className="aspect-[4/3] bg-[#F5F5F5] overflow-hidden relative flex items-center justify-center">
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-[8px] flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-lg">
                          <ArrowUpRight className="text-[#0F0F0F]" size={20} />
                        </div>
                      </div>

                      <ImageWithFallback
                        src={project.heroImage}
                        alt={project.title}
                        className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] text-[#A3A3A3] uppercase tracking-[0.15em]">
                        {project.category}
                      </span>
                      <span className="w-4 h-[1px] bg-[#D4D4D4]" />
                      <span className="text-[10px] text-[#A3A3A3]">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-[22px] font-[600] tracking-[-0.02em] text-[#0F0F0F] group-hover:text-[#525252] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[14px] text-[#737373] leading-[1.6] font-[400] line-clamp-2 max-w-[95%]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2.5 py-1 bg-[#FAFAFA] border border-[#E5E5E5] rounded-[4px] text-[#737373] uppercase tracking-[0.04em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}