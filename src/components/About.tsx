"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Background fade in from 0% to 15% opacity
    gsap.fromTo(
      bgRef.current,
      { opacity: 0 },
      {
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    // Text "THE ARCHITECT" Gaussian blur-to-focus transition
    gsap.fromTo(
      textRef.current,
      { filter: "blur(20px)", opacity: 0, scale: 1.1 },
      {
        filter: "blur(0px)",
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "center center",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center 80%",
          end: "center center",
          scrub: 1,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-obsidian flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/images/profile.png"
          alt="The Aftermath"
          fill
          className="object-cover object-center grayscale mix-blend-overlay"
          priority
        />
        {/* Film grain and noise overlay */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        {/* Volumetric smoke/gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-9xl font-sans font-black tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-4"
        >
          THE ARCHITECT
        </h2>
        
        <p 
          ref={subtitleRef}
          className="font-mono text-gold text-sm md:text-lg tracking-[0.2em] uppercase max-w-2xl mx-auto"
        >
          The dust has settled. You are the one left standing.
        </p>
      </div>
    </section>
  );
}
