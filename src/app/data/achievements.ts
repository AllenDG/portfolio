export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  images: string[];
  location?: string;
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "AI Workshop: Design Showcase",
    date: "February 2026",
    category: "Workshop & Training",
    description: "Led a hands-on workshop on AI-driven design, showing clients how Figma Make fits into a real UI/UX workflow. I demonstrated how AI accelerates the early stages—layouts, components, repetitive groundwork—so designers can focus on craft and user experience. Walked through taking an AI-generated foundation and refining it into a polished, production-ready interface. The core takeaway: AI handles the how faster, but the designer still owns the why.",
    images: [
      "/src/assets/images/mworld-1.jpg",
      "/src/assets/images/mworld-2.jpg"
    ],
    location: "Magsaysay People Resources"
  },
  {
    id: "2",
    title: "CITE Tech Summit 2026",
    date: "March 2026",
    category: "Speaking & Mentorship",
    description: "Spoke at PHINMA University of Pangasinan as a resource speaker during the CITE Tech Summit, teaching students the fundamentals of UI/UX design and navigating a career in tech. Sessions covered empathy-driven design, user journey mapping, and design storytelling—paired with hands-on activities where students created real designs using Figma Make and Google Stitch. Led practical workshops demonstrating how to use AI-powered design tools to accelerate prototyping, from layout generation to component building. Also conducted presentation coaching sessions, helping students clearly communicate design decisions, articulate user value, and tell compelling stories around their work. The overarching goal: bridge the gap between classroom theory and what the industry actually looks like, equipping the next generation of designers with practical knowledge of modern tools, confidence in their craft, and the mindset needed for continuous growth in the rapidly evolving design landscape.",
    images: [
      "/src/assets/images/cite-1.jpg",
      "/src/assets/images/cite-2.jpg",
      "/src/assets/images/site-2.jpg"
    ],
    location: "PHINMA University of Pangasinan"
  },
  {
    id: "3",
    title: "Mastering Prompt Engineering Workshop",
    date: "June 2026",
    category: "Workshop & Training",
    description: "Assisted in delivering specialized AI Prompt Engineering workshops for clients at Magsaysay People Resources Incorporation, covering fundamentals to advanced techniques—all centered around Microsoft Copilot. Participants were trained on prompt structure, context setting, iterative refinement, and output validation, going well beyond basic prompting into real, repeatable workflows. Sessions were hands-on and use-case driven, tackling content generation, code assistance, data analysis, and creative problem-solving—while also teaching participants how to evaluate AI responses and debug ineffective prompts. The goal: equip professionals with the practical skills to consistently get quality output from Microsoft Copilot and build a sustainable foundation for AI adoption in their day-to-day work. By focusing on systematic approaches and real-world application, the program transformed how participants leveraged AI tools, turning them from occasional users into confident practitioners who could maximize productivity and output quality.",
    images: [
      "/src/assets/images/promptEngineer-1.jpg",
      "/src/assets/images/promptEngineer-2.jpg",
      "/src/assets/images/promptEngineer-3.jpg"
    ],
    location: "Magsaysay People Resources Incorporation"
  },
  // Add more achievements here
];
