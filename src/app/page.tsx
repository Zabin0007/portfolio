"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="top" className="bg-obsidian min-h-screen selection:bg-gold/30">
      {/* <ScrollyCanvas>
        {(progress) => <Overlay scrollYProgress={progress} />}
      </ScrollyCanvas> */}
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
