import { Hero } from "../components/sections/Hero";
import { WorkGrid } from "../components/sections/WorkGrid";
import { FeaturedCase } from "../components/sections/FeaturedCase";
import { Process } from "../components/sections/Process";
import { Experience } from "../components/sections/Experience";
import { Capabilities } from "../components/sections/Capabilities";
import { About } from "../components/sections/About";
import { CTA } from "../components/sections/CTA";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <WorkGrid />
      <FeaturedCase />
      <Process />
      <Experience />
      <Capabilities />
      <About />
      <CTA />
    </>
  );
}
