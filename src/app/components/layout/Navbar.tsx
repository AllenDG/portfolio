import { useState } from "react";
import { Container } from "../ui/Container";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Link, useNavigate, useLocation } from "react-router";
import { Linkedin, Instagram, Github, Mail } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
    
    // Detect active section based on scroll position (only on home page)
    if (location.pathname === "/") {
      const sections = ["work", "process", "about"];
      const scrollPosition = latest + window.innerHeight / 3; // Trigger when section is 1/3 from top
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }
  });

  const links = [
    { name: "Work", action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), sectionId: "work" },
    { name: "Process", action: () => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" }), sectionId: "process" },
    { name: "About", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), sectionId: "about" },
    { name: "Achievements", action: () => navigate("/achievements"), isRoute: true, path: "/achievements" },
  ];

  const isActive = (link: typeof links[0]) => {
    // If on achievements page, only Achievements link is active
    if (location.pathname === "/achievements") {
      return link.path === "/achievements";
    }
    
    // If on home page, check if the section matches activeSection
    if (location.pathname === "/" && link.sectionId) {
      return activeSection === link.sectionId;
    }
    
    return false;
  };

  const handleNavClick = (action: () => void, isRoute?: boolean) => {
    if (!isRoute && location.pathname !== "/") {
      navigate("/");
      setTimeout(action, 300);
    } else {
      action();
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl py-3"
            : "bg-transparent py-5 lg:py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative group">
            <motion.span
              className="text-[22px] tracking-[-0.04em] text-[#0F0F0F] flex items-baseline gap-[2px]"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-[600]">A</span>
              <span className="font-[500]">llen</span>
              <motion.span
                className="inline-block w-[6px] h-[6px] rounded-[2px] bg-[#0F0F0F] ml-[1px] mb-[2px]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link, index) => {
              const active = isActive(link);
              return (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.action, link.isRoute)}
                  className={`relative px-5 py-2 text-[13px] tracking-[0.02em] transition-colors duration-300 group ${
                    active ? "text-[#0F0F0F]" : "text-[#737373] hover:text-[#0F0F0F]"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <span className="relative z-10 font-[500]">{link.name}</span>
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#0F0F0F] origin-center"
                    initial={{ width: active ? "60%" : 0 }}
                    animate={{ width: active ? "60%" : 0 }}
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.button>
              );
            })}

            {/* Separator */}
            <div className="w-[1px] h-4 bg-[#E5E5E5] mx-3" />

            {/* CTA */}
            <motion.button
              onClick={() =>
                (window.location.href =
                  "mailto:allendeguzman.work@gmail.com?subject=Resume Request")
              }
              className="text-[13px] font-[500] px-5 py-2.5 border border-[#0F0F0F] text-[#0F0F0F] rounded-[6px] hover:bg-[#0F0F0F] hover:text-white hover:border-[#0F0F0F] transition-all duration-400 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Request Resume</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex flex-col gap-[6px] items-end">
              <motion.span
                className="block h-[1.5px] bg-[#0F0F0F] origin-right"
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, width: 20, y: 0, x: -2 }
                    : { rotate: 0, width: 20, y: 0, x: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-[1.5px] bg-[#0F0F0F]"
                animate={
                  isMobileMenuOpen
                    ? { opacity: 0, width: 0 }
                    : { opacity: 1, width: 14 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[1.5px] bg-[#0F0F0F] origin-right"
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, width: 20, y: 0, x: -2 }
                    : { rotate: 0, width: 20, y: 0, x: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </Container>
      </motion.nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col justify-between"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 30px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 30px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 30px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-20">
              {links.map((link, index) => {
                const active = isActive(link);
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick(link.action, link.isRoute);
                    }}
                    className="text-left py-4 border-b border-[#F0F0F0] group"
                  >
                    <span className={`text-[36px] tracking-[-0.03em] font-[500] group-hover:translate-x-3 transition-transform duration-300 block ${
                      active ? "text-[#0F0F0F]" : "text-[#737373]"
                    }`}>
                      {link.name}
                    </span>
                  </motion.button>
                );
              })}

              <motion.button
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href =
                    "mailto:allendeguzman.work@gmail.com?subject=Resume Request";
                }}
                className="text-left py-4 group mt-2"
              >
                <span className="text-[36px] tracking-[-0.03em] font-[500] text-[#737373] group-hover:text-[#0F0F0F] group-hover:translate-x-3 transition-all duration-300 block">
                  Resume
                </span>
              </motion.button>
            </div>

            <motion.div
              className="px-8 pb-10 flex justify-between items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-6">
                <a href="https://linkedin.com/in/allendeguzman" target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#0F0F0F] transition-colors duration-300" aria-label="LinkedIn">
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
                <a href="https://instagram.com/allendeguzman" target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#0F0F0F] transition-colors duration-300" aria-label="Instagram">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="https://github.com/allendeguzman" target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#0F0F0F] transition-colors duration-300" aria-label="GitHub">
                  <Github size={18} strokeWidth={1.5} />
                </a>
                <a href="mailto:allendeguzman.work@gmail.com" className="text-[#A3A3A3] hover:text-[#0F0F0F] transition-colors duration-300" aria-label="Email">
                  <Mail size={18} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}