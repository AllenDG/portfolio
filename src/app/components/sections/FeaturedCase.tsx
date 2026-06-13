import { Container } from "../ui/Container";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Section } from "../ui/Section";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

export function FeaturedCase() {
  const navigate = useNavigate();

  return (
    <Section id="featured" className="bg-[#FAFAFA] border-y border-[#E5E5E5]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/3 space-y-10">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3] block">
                Featured Case Study
              </span>
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-[600] tracking-[-0.02em] text-[#0F0F0F]">
                RentMe — Digital Rental Platform
              </h2>
              <p className="text-[15px] text-[#525252] leading-[1.7] font-[400]">
                Transforming the traditional rental search experience into a faster, safer, and more accessible digital platform for students and young professionals across the Philippines.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Problem",
                  desc: "Students and young professionals struggle with scattered property listings, unreliable recommendations, and limited communication channels with property owners, leading to poor housing decisions.",
                },
                {
                  title: "Strategy",
                  desc: "Developed a centralized platform with intelligent search, advanced filtering, map integration, and direct messaging features based on user research with both tenants and property owners.",
                },
                {
                  title: "Outcome",
                  desc: "Achieved 60% faster property discovery, 85% user satisfaction rate, and 3x increase in owner inquiries through AI-driven recommendations and seamless communication tools.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <h3 className="text-[15px] font-[600] text-[#0F0F0F]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#737373] leading-[1.7] font-[400]">
                    {item.desc}
                  </p>
                  {index < 2 && (
                    <div className="w-full h-[1px] bg-[#E5E5E5] mt-4" />
                  )}
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => navigate("/project/rentme-platform")}
              className="text-[13px] font-[500] text-[#0F0F0F] border-b border-[#0F0F0F] pb-1 hover:pb-2 transition-all flex items-center gap-2 group"
            >
              Read Case Study
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="aspect-[16/10] bg-white border border-[#E5E5E5] p-2 rounded-[8px] shadow-sm overflow-hidden">
              <div className="w-full h-full overflow-hidden bg-[#F5F5F5] relative rounded-[4px]">
                <ImageWithFallback
                  src="/images/banner-1.png"
                  alt="RentMe Platform Interface"
                  className="object-contain w-full h-full hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}