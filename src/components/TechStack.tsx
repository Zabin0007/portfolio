"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "React", delay: 0 },
  { name: "Node.js", delay: 0.1 },
  { name: "MongoDB", delay: 0.2 },
  { name: "Express", delay: 0.15 },
];

export default function TechStack() {
  const containerRef = useRef<HTMLElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "center center",
        scrub: false,
        toggleActions: "play none none reverse", // Play on enter, reverse on leave back
      },
    });

    // 1. Title fades in
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // 2. Muzzle Flash ignites
    tl.fromTo(
      flashRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1.5, duration: 0.1, ease: "power4.out" }
    ).to(
      flashRef.current,
      { opacity: 0, scale: 2, duration: 0.3, ease: "power4.in" },
      "+=0.1"
    );

    // 3. Icons thrown upward
    const icons = gsap.utils.toArray(".tech-item");
    tl.fromTo(
      icons,
      { opacity: 0, y: 150, scale: 0.5, rotation: () => gsap.utils.random(-15, 15) },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.3" // overlap with flash ending
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-obsidian flex flex-col items-center justify-center overflow-hidden py-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/tech.png"
          alt="The Ignition"
          fill
          className="object-cover object-center grayscale mix-blend-overlay opacity-40"
        />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-7xl font-sans font-bold text-white mb-24 tracking-tighter"
        >
          THE IGNITION
        </h2>

        {/* Muzzle Flash Center Point */}
        <div className="relative w-full flex justify-center mt-32">
          {/* Flash Element */}
          <div 
            ref={flashRef}
            className="absolute -top-32 w-64 h-64 bg-gold rounded-full mix-blend-screen blur-[60px] opacity-0 pointer-events-none"
            style={{ boxShadow: "0 0 100px 50px rgba(212, 175, 55, 0.8)" }}
          />

          {/* Icons Grid */}
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 relative z-20">
            {techStack.map((tech) => (
              <div 
                key={tech.name}
                className="tech-item group relative"
              >
                {/* Hover spark */}
                <div className="absolute inset-0 bg-gold/50 blur-xl scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 pointer-events-none" />
                
                {/* Card */}
                <div className="relative backdrop-blur-md bg-white/5 border border-white/10 px-8 py-6 rounded-lg text-center transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:border-gold/50">
                  <span className="font-mono text-gold text-sm tracking-wider uppercase">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
