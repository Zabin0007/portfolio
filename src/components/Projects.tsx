"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Experience",
    description: "A high-performance headless commerce platform with 3D product visualization. Built for conversion and scale.",
    tech: ["Next.js", "Three.js", "Shopify"],
  },
  {
    title: "Fintech Dashboard",
    description: "Real-time analytics dashboard with complex data visualization and websockets. Institutional grade security.",
    tech: ["React", "D3.js", "Node.js"],
  },
  {
    title: "AI Creative Suite",
    description: "Generative AI interface for real-time image manipulation and prompting. The next evolution of creative tools.",
    tech: ["TypeScript", "WebGL", "Python"],
  },
  {
    title: "Web3 NFT Platform",
    description: "Decentralized marketplace with smart contract integration and wallet connect. Total ownership protocol.",
    tech: ["Solidity", "Ethers.js", "Next.js"],
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");
    const container = containerRef.current;
    
    if (cards.length > 0 && container) {
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          // Scroll length matches total width of cards minus viewport
          end: () => `+=${scrollContainerRef.current?.offsetWidth}`,
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="holdings" 
      className="relative h-screen bg-obsidian overflow-hidden"
    >
      {/* Background Vault Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/vault_bg.png"
          alt="The Holdings Vault"
          fill
          className="object-cover object-center opacity-80 mix-blend-screen"
        />
        {/* Subtle shadow overlay to match moody aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian opacity-80" />
      </div>

      <div className="absolute top-12 left-6 md:left-24 z-20">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tighter drop-shadow-xl">
          THE HOLDINGS
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="relative z-10 flex h-full items-center pl-6 md:pl-24 w-[400vw] sm:w-[300vw] md:w-[200vw]"
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card w-screen shrink-0 pr-6 md:pr-24 flex items-center justify-start h-2/3"
          >
            <div className="w-full max-w-2xl h-full backdrop-blur-xl bg-charcoal/40 border border-gold/10 p-10 md:p-16 rounded-sm shadow-2xl flex flex-col justify-between group hover:border-gold/30 transition-colors duration-500">
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl md:text-4xl font-sans font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-gray-500">
                    <a href="#" className="hover:text-gold transition-colors" aria-label="Code"><Code2 className="w-6 h-6" /></a>
                    <a href="#" className="hover:text-gold transition-colors" aria-label="Live Demo"><ExternalLink className="w-6 h-6" /></a>
                  </div>
                </div>

                <p className="text-gray-300 text-lg md:text-xl font-mono leading-relaxed opacity-80">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs md:text-sm font-mono font-bold tracking-widest text-gold border border-gold/20 uppercase bg-black/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
