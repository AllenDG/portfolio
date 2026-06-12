import { Container } from "../ui/Container";
import { Link } from "react-router";
import { Linkedin, Instagram, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAFA] border-t border-[#E5E5E5] py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-[18px] tracking-[-0.03em] text-[#0F0F0F] font-[600]">
              Allen<span className="inline-block w-[5px] h-[5px] rounded-[2px] bg-[#0F0F0F] ml-[1px] mb-[2px] align-baseline" />
            </Link>
            <span className="hidden md:block w-[1px] h-4 bg-[#E5E5E5]" />
            <span className="text-[12px] text-[#A3A3A3] tracking-[0.02em]">
              © {currentYear}
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/in/allendeguzman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#0F0F0F] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com/allendeguzman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#0F0F0F] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/allendeguzman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#0F0F0F] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:allendeguzman.work@gmail.com"
              className="text-[#737373] hover:text-[#0F0F0F] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
