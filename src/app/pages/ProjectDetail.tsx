import { Container } from "../components/ui/Container";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams, useNavigate } from "react-router";
import { projects } from "../data/projects";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect } from "react";

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const projectIndex = projects.findIndex((p) => p.id === id);
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center space-y-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3]">
            Error 404
          </p>
          <h2 className="text-[36px] font-[600] tracking-[-0.03em] text-[#0F0F0F]">
            Project not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-[14px] font-[500] px-6 py-3 border border-[#E5E5E5] rounded-[8px] hover:border-[#0F0F0F] transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* === HERO === */}
      <section className="pt-28 lg:pt-32 pb-6">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back button */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-[13px] text-[#737373] hover:text-[#0F0F0F] transition-colors mb-12 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span>Back to Portfolio</span>
            </button>

            {/* Category & Year */}
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3]">
                {project.category}
              </span>
              <span className="w-8 h-[1px] bg-[#D4D4D4]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3]">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-[600] tracking-[-0.035em] text-[#0F0F0F] leading-[1.1] max-w-3xl mb-5">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-[clamp(1rem,1.5vw,1.2rem)] text-[#525252] max-w-2xl leading-[1.7] font-[400]">
              {project.shortDescription || project.description}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* === HERO IMAGE === */}
      <section className="mb-20 lg:mb-28">
        <div className="w-full overflow-hidden relative bg-[#FAFAFA]">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center"
          >
            <ImageWithFallback
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* === PROJECT META === */}
      <Container>
        <motion.div
          className="py-10 border-y border-[#E5E5E5] mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { label: "Client", value: project.client || "Confidential" },
              { label: "Timeline", value: project.timeline || "Ongoing" },
              { label: "Role", value: project.role || "Designer" },
              { label: "Year", value: project.year },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3] block mb-2">
                  {item.label}
                </span>
                <span className="text-[15px] font-[500] text-[#0F0F0F]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          
          {/* Live Demo Button */}
          {project.liveUrl && (
            <div className="pt-6 border-t border-[#E5E5E5]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-[500] text-white bg-[#0F0F0F] px-6 py-3 rounded-[8px] hover:bg-[#333333] transition-colors"
              >
                <span>View Live Demo</span>
                <ArrowRight size={14} />
              </a>
            </div>
          )}
        </motion.div>
      </Container>

      {/* === THE CHALLENGE === */}
      <Container>
        <motion.section
          className="mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-[28px] font-[600] tracking-[-0.02em] text-[#0F0F0F] mb-3">
                  The Challenge
                </h2>
                <div className="w-10 h-[2px] bg-[#0F0F0F]" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[17px] text-[#525252] leading-[1.85] font-[400]">
                {project.challenge}
              </p>
            </div>
          </div>
        </motion.section>
      </Container>

      {/* === THE APPROACH === */}
      <section className="bg-[#FAFAFA] border-y border-[#E5E5E5] py-20 lg:py-28 mb-20 lg:mb-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <h2 className="text-[28px] font-[600] tracking-[-0.02em] text-[#0F0F0F] mb-3">
                  The Approach
                </h2>
                <div className="w-10 h-[2px] bg-[#0F0F0F]" />
              </div>
              <div className="lg:col-span-8">
                <p className="text-[17px] text-[#525252] leading-[1.85] font-[400]">
                  {project.approach}
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* === THE SOLUTION === */}
      <Container>
        <motion.section
          className="mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-[28px] font-[600] tracking-[-0.02em] text-[#0F0F0F] mb-3">
                  The Solution
                </h2>
                <div className="w-10 h-[2px] bg-[#0F0F0F]" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[17px] text-[#0F0F0F] leading-[1.85] font-[400]">
                {project.solution}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-[#E5E5E5]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-[4px] text-[#525252] uppercase tracking-[0.05em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </Container>

      {/* === RESULTS === */}
      {project.results && project.results.length > 0 && (
        <section className="text-white py-20 lg:py-28 mb-20 lg:mb-28" style={{
          background: "linear-gradient(135deg, #737373 0%, #333333 40%, #0F0F0F 100%)"
        }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-14">
                <h2 className="text-[28px] font-[600] tracking-[-0.02em] mb-3">
                  The Results
                </h2>
                <div className="w-10 h-[2px] bg-white" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="block text-[clamp(2rem,4vw,3.5rem)] font-[600] tracking-[-0.03em] mb-2">
                      {result.metric}
                    </span>
                    <span className="text-[13px] text-white/60 font-[400] leading-relaxed">
                      {result.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* === KEY INSIGHTS === */}
      {project.insights && project.insights.length > 0 && (
        <Container>
          <motion.section
            className="mb-20 lg:mb-28"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <h2 className="text-[28px] font-[600] tracking-[-0.02em] text-[#0F0F0F] mb-3">
                  Key Insights
                </h2>
                <div className="w-10 h-[2px] bg-[#0F0F0F]" />
              </div>
              <div className="lg:col-span-8 space-y-0">
                {project.insights.map((insight, index) => (
                  <motion.div
                    key={index}
                    className="py-6 border-b border-[#E5E5E5] last:border-b-0 flex gap-5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="text-[12px] text-[#A3A3A3] mt-[3px] shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[16px] text-[#525252] leading-[1.7] font-[400]">
                      {insight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </Container>
      )}

      {/* === DESIGN SYSTEM === */}
      {project.designSystem && (
        <section className="bg-[#FAFAFA] border-y border-[#E5E5E5] py-20 lg:py-28 mb-20 lg:mb-28">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-14">
                <h2 className="text-[28px] font-[600] tracking-[-0.02em] text-[#0F0F0F] mb-3">
                  Visual Language
                </h2>
                <div className="w-10 h-[2px] bg-[#0F0F0F]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Typography */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3] block mb-4">
                    Typography
                  </span>
                  <div className="bg-white border border-[#E5E5E5] rounded-[8px] p-10 flex items-center justify-center h-44">
                    <span className="text-[36px] font-[600] text-[#0F0F0F] tracking-[-0.02em]">
                      {project.designSystem.typography}
                    </span>
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3] block mb-4">
                    Color Palette
                  </span>
                  <div className="grid grid-cols-5 gap-0 rounded-[8px] overflow-hidden border border-[#E5E5E5] h-44">
                    {project.designSystem.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="h-full w-full relative group cursor-pointer"
                        style={{ backgroundColor: color }}
                      >
                        <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span
                            className="text-[10px] px-2 py-1 rounded-[4px] backdrop-blur-sm"
                            style={{
                              color:
                                idx === 0 || color === "#000000"
                                  ? "#ffffff"
                                  : "#0F0F0F",
                              backgroundColor:
                                idx === 0 || color === "#000000"
                                  ? "rgba(0,0,0,0.5)"
                                  : "rgba(255,255,255,0.8)",
                            }}
                          >
                            {color}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* === INTERFACE GALLERY === */}
      {project.screens && project.screens.length > 0 && (
        <Container>
          <motion.section
            className="mb-20 lg:mb-28"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-14 flex items-end justify-between">
              <div>
                <h2 className="text-[28px] font-[600] tracking-[-0.02em] text-[#0F0F0F] mb-3">
                  Interface Gallery
                </h2>
                <div className="w-10 h-[2px] bg-[#0F0F0F]" />
              </div>
              <span className="text-[12px] text-[#A3A3A3] hidden md:block">
                {project.screens.length} screens
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:gap-10">
              {project.screens.map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-[8px] p-4 md:p-6 lg:p-8"
                >
                  <ImageWithFallback
                    src={screen}
                    alt={`${project.title} - Screen ${index + 1}`}
                    className="w-full h-auto rounded-[4px]"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </Container>
      )}

      {/* === NEXT PROJECT === */}
      <section className="border-t border-[#E5E5E5]">
        <motion.div
          className="group cursor-pointer"
          onClick={() => navigate(`/project/${nextProject.id}`)}
          whileHover={{ backgroundColor: "#FAFAFA" }}
          transition={{ duration: 0.3 }}
        >
          <Container>
            <div className="py-20 lg:py-28 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3] block mb-4">
                  Next Case Study
                </span>
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-[600] tracking-[-0.03em] text-[#0F0F0F] group-hover:translate-x-3 transition-transform duration-500">
                  {nextProject.title}
                </h2>
                <p className="text-[15px] text-[#737373] mt-2 font-[400]">
                  {nextProject.category}
                </p>
              </div>
              <motion.div
                className="w-14 h-14 rounded-[8px] border border-[#E5E5E5] flex items-center justify-center group-hover:bg-[#0F0F0F] group-hover:border-[#0F0F0F] transition-all duration-400 shrink-0"
              >
                <ArrowRight
                  size={20}
                  className="text-[#0F0F0F] group-hover:text-white transition-colors"
                />
              </motion.div>
            </div>
          </Container>
        </motion.div>
      </section>
    </>
  );
}