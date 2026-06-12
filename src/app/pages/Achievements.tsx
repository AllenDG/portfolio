import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, ChevronDown, X, ZoomIn, ZoomOut } from "lucide-react";
import { achievements } from "../data/achievements";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function Achievements() {
  const [expandedId, setExpandedId] = useState<string | null>(achievements[0]?.id || null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageZoom, setImageZoom] = useState(1);

  const toggleAchievement = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setImageZoom(1); // Start at 100% (1x zoom)
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setImageZoom(1);
    document.body.style.overflow = 'auto';
  };

  const zoomIn = () => {
    setImageZoom(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setImageZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 border-b border-[#E5E5E5]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3A3A3] block mb-4">
              Professional Journey
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-[600] tracking-[-0.035em] text-[#0F0F0F] leading-[1.1] mb-6">
              Achievements & Experience
            </h1>
            <p className="text-[18px] text-[#525252] leading-[1.7] font-[400]">
              Explore my journey through workshops, speaking engagements, and training sessions. 
              Click on any achievement to learn more and view photos.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Achievements Accordion */}
      <Section>
        <Container>
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const isExpanded = expandedId === achievement.id;
              
              return (
                <motion.div
                  key={achievement.id}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAchievement(achievement.id)}
                    className={`w-full text-left bg-white border rounded-[8px] p-6 md:p-8 transition-all duration-300 group ${
                      isExpanded 
                        ? 'border-[#D4D4D4] shadow-md' 
                        : 'border-[#E5E5E5] hover:border-[#D4D4D4] hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F5F5F5] border border-[#E5E5E5] rounded-[4px] mb-4">
                          <span className="text-[10px] uppercase tracking-[0.1em] font-[600] text-[#0F0F0F]">
                            {achievement.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-[600] tracking-[-0.03em] text-[#0F0F0F] leading-[1.3] mb-3">
                          {achievement.title}
                        </h2>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-[13px] text-[#737373]">
                            <Calendar size={14} strokeWidth={1.5} />
                            <span>{achievement.date}</span>
                          </div>

                          {achievement.location && (
                            <div className="flex items-center gap-2 text-[13px] text-[#737373]">
                              <MapPin size={14} strokeWidth={1.5} />
                              <span>{achievement.location}</span>
                            </div>
                          )}

                          <div className="flex items-center gap-1 text-[12px] text-[#A3A3A3]">
                            <span>{achievement.images.length} photo{achievement.images.length > 1 ? 's' : ''}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expand/Collapse Icon */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[6px] bg-[#F5F5F5] group-hover:bg-[#E5E5E5] transition-colors"
                      >
                        <ChevronDown size={20} className="text-[#0F0F0F]" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#FAFAFA] border border-t-0 border-[#E5E5E5] rounded-b-[8px] p-6 md:p-8 space-y-8">
                          {/* Description */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                          >
                            <h3 className="text-[13px] uppercase tracking-[0.1em] font-[600] text-[#0F0F0F] mb-3">
                              About This Experience
                            </h3>
                            <p className="text-[15px] text-[#525252] leading-[1.8] font-[400]">
                              {achievement.description}
                            </p>
                          </motion.div>

                          {/* Images Grid */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                          >
                            <h3 className="text-[13px] uppercase tracking-[0.1em] font-[600] text-[#0F0F0F] mb-4">
                              Gallery ({achievement.images.length})
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {achievement.images.map((image, imgIndex) => (
                                <motion.button
                                  key={imgIndex}
                                  onClick={() => openImageModal(image)}
                                  className="group relative bg-white rounded-[8px] overflow-hidden border border-[#E5E5E5] hover:border-[#A3A3A3] transition-all duration-300 cursor-pointer"
                                  initial={{ scale: 0.95, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.3 + imgIndex * 0.1, duration: 0.4 }}
                                  whileHover={{ y: -4 }}
                                >
                                  <div className="aspect-[16/10] relative overflow-hidden">
                                    <ImageWithFallback
                                      src={image}
                                      alt={`${achievement.title} - Image ${imgIndex + 1}`}
                                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="absolute bottom-3 right-3 flex items-center gap-2">
                                        <div className="flex items-center gap-1 text-white text-[11px] uppercase tracking-[0.1em] font-[500] px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-[4px]">
                                          <ZoomIn size={12} />
                                          <span>View</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            {/* Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomOut();
                }}
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-[8px] text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ZoomOut size={20} />
              </motion.button>
              
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomIn();
                }}
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-[8px] text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ZoomIn size={20} />
              </motion.button>

              <motion.button
                onClick={closeImageModal}
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-[8px] text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Zoom Level Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-[6px] text-white text-[13px] font-[500]">
              {Math.round(imageZoom * 100)}%
            </div>

            {/* Image */}
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh] overflow-auto flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage}
                alt="Full size view"
                className="rounded-[8px]"
                style={{ 
                  transform: `scale(${imageZoom})`,
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-[#0F0F0F] via-[#1F1F1F] to-[#0F0F0F] text-white border-t border-[#E5E5E5]">
        <Container>
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-[600] tracking-[-0.03em] mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-[16px] text-white/70 leading-[1.7] mb-8">
              Whether it's a workshop, training session, or project collaboration, 
              I'd love to discuss how we can work together.
            </p>
            <motion.a
              href="mailto:allendeguzman.work@gmail.com"
              className="inline-flex items-center gap-2 text-[14px] font-[500] px-8 py-4 bg-white text-[#0F0F0F] rounded-[8px] hover:bg-white/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
