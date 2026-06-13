export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  tags: string[];
  client: string;
  timeline: string;
  role: string;
  year: string;
  challenge: string;
  approach: string;
  solution: string;
  results: { metric: string; value: string; label: string }[];
  insights: string[];
  designSystem: {
    typography: string;
    colors: string[];
  };
  screens: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "rentme-platform",
    title: "RentMe",
    category: "Web Application",
    description: "A comprehensive digital rental platform connecting students and young professionals with safe, affordable housing across the Philippines.",
    shortDescription: "Transforming the rental experience with intelligent search and seamless communication.",
    heroImage: "/images/banner-1.png",
    tags: ["ReactJS", "Tailwind CSS", "Firebase", "Material UI", "JavaScript", "Claude AI", "Google Maps API", "WCAG AA/AAA"],
    client: "Personal Project",
    timeline: "6 Months",
    role: "Web Developer & UI/UX Designer",
    year: "2024",
    challenge: "Students and young professionals struggle to find suitable accommodations due to scattered property listings, unreliable recommendations, limited communication channels with owners, and uncertainty before physically visiting properties. Traditional dorm hunting is time-consuming, inefficient, and often leads to poor housing decisions that affect academic and professional performance.",
    approach: "I conducted user research with students and property owners to understand pain points in the rental search process. The research revealed the need for centralized listings, advanced filtering, transparent communication, and data-driven recommendations. I designed intuitive user flows for both tenant and owner personas, ensuring the platform addresses real-world rental challenges while maintaining scalability.",
    solution: "RentMe (v3.0) is a full-stack web platform built with ReactJS, Tailwind CSS, Material UI, and Firebase, featuring WCAG AA/AAA compliant design inspired by Airbnb's UX patterns. The platform includes an intelligent property search with advanced filters (price range slider, location autocomplete, room type selection), interactive map integration with listing pins and radius-based filtering, AI-powered features using Claude API (smart listing recommender, context-aware chatbot, listing description writer), direct messaging between tenants and owners, visit scheduling with owner confirmation flow, favorites and saved searches, Budget Finder tool with value score algorithm, and a comprehensive owner dashboard for listing management and analytics. The redesigned interface uses Plus Jakarta Sans typography and a verified WCAG color system with primary blue #2563EB achieving 8.59:1 contrast ratio. The platform features subscription tiers (Standard and Premium) for property owners to enhance visibility and access advanced tools, making it the most comprehensive rental platform for Filipino students and young professionals.",
    results: [
      { metric: "500+", value: "500", label: "Active property listings" },
      { metric: "85%", value: "85", label: "User satisfaction rate" },
      { metric: "60%", value: "60", label: "Faster property discovery" },
      { metric: "3x", value: "3", label: "Increase in owner inquiries" }
    ],
    insights: [
      "WCAG AA/AAA compliant color system with verified contrast ratios (primary blue #2563EB achieving 8.59:1) significantly improved accessibility and user trust across all demographics.",
      "Airbnb-inspired inline multi-field search bar (Location | Budget | Room Type) with quick-filter chips increased search conversion by replacing the single text box pattern.",
      "AI-powered features using Claude API (smart recommendations, context-aware chatbot, listing writer) differentiated RentMe from all competitors in the Philippine dormitory market.",
      "Interactive map integration with listing pins and radius-based geolocation filtering improved property discovery and reduced decision-making time by 60%.",
      "Budget Finder tool with value score algorithm (amenity-per-peso ratio) helped budget-conscious students find optimal listings, increasing inquiry rates by 3x.",
      "Dual-audience flow design (Tenants | Owners) with numbered step visualization improved onboarding clarity and reduced support requests significantly."
    ],
    designSystem: {
      typography: "Plus Jakarta Sans",
      colors: ["#2563EB", "#1D4ED8", "#EFF6FF", "#BFDBFE", "#1E3A8A", "#111827"]
    },
    screens: [
      "/images/screen-1.png",
      "/images/screen-2.png",
      "/images/screen-3.png",
      "/images/screen-4.png",
      "/images/screen-5.png"
    ],
    liveUrl: "https://web-dormitory.vercel.app/"
  }
];
