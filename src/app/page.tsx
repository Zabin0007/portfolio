"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main id="top" className="bg-[#121212] min-h-screen selection:bg-blue-500/30">
      <ScrollyCanvas>
        {(progress) => <Overlay scrollYProgress={progress} />}
      </ScrollyCanvas>
      <Projects />
    </main>
  );
}
