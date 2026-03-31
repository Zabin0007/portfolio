"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const leftGlassRef = useRef<HTMLDivElement>(null);
  const rightGlassRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [dealSecured, setDealSecured] = useState(false);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const secureDeal = contextSafe(() => {
    if (dealSecured) return;
    setDealSecured(true);

    const tl = gsap.timeline();

    // 1. Hide Button
    tl.to(buttonRef.current, { 
      opacity: 0, 
      scale: 0.9, 
      duration: 0.4, 
      ease: "power2.inOut" 
    });

    // 2. Glasses slide in (speeding up for impact)
    tl.fromTo(leftGlassRef.current, 
      { xPercent: -100, opacity: 1, display: "block" },
      { xPercent: 0, duration: 1.2, ease: "power3.in" },
      "-=0.2"
    );
    tl.fromTo(rightGlassRef.current,
      { xPercent: 100, opacity: 1, display: "block" },
      { xPercent: 0, duration: 1.2, ease: "power3.in" },
      "<" // start same time
    );

    // 3. The Impact / Lens Flare
    tl.fromTo(flareRef.current,
      { opacity: 0, scale: 0, rotate: 0 },
      { opacity: 1, scale: 2, rotate: 45, duration: 0.05, ease: "power4.out" }
    ).to(flareRef.current, { 
      opacity: 0, 
      scale: 5, 
      duration: 0.6, 
      ease: "power2.out" 
    }, "+=0.1");

    // 4. Dissolve into smoke
    tl.to([leftGlassRef.current, rightGlassRef.current], {
      filter: "blur(30px)",
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=0.4");

    // 5. Final Text Reveal
    tl.fromTo(textRef.current,
      { opacity: 0, scale: 0.9, filter: "blur(10px)", display: "block" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" },
      "-=0.8"
    );
  });

  return (
    <section 
      ref={containerRef}
      className="relative h-screen bg-obsidian flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience (Smoke/Void) */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-charcoal/50 to-obsidian z-0" />

      {/* Button State */}
      <button 
        ref={buttonRef}
        onClick={secureDeal}
        className="relative z-30 font-sans font-bold text-2xl md:text-4xl text-gold border border-gold/30 px-12 py-6 rounded-sm uppercase tracking-widest hover:bg-gold hover:text-obsidian hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500"
      >
        SECURE THE DEAL
      </button>

      {/* Final Text (Hidden initially) */}
      <h2 
        ref={textRef}
        className="hidden absolute z-30 font-sans font-black text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] tracking-tighter text-center px-4"
      >
        PARTNERSHIP<br />ESTABLISHED.
      </h2>

      {/* The Glasses Animation Layers */}
      <div className="absolute inset-0 z-20 pointer-events-none flex">
        {/* Left Half */}
        <div 
          ref={leftGlassRef}
          className="hidden relative w-1/2 h-full overflow-hidden object-cover opacity-0"
        >
          <div className="absolute top-0 left-0 w-[200vw] h-full sm:w-[200%]">
            <Image 
              src="/images/contact_bg.png"
              alt="Left Glass"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Half */}
        <div 
          ref={rightGlassRef}
          className="hidden relative w-1/2 h-full overflow-hidden opacity-0"
        >
          <div className="absolute top-0 right-0 w-[200vw] h-full sm:w-[200%]">
            <Image 
              src="/images/contact_bg.png"
              alt="Right Glass"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* The Lens Flare / Spark */}
        <div 
          ref={flareRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/80 rounded-full mix-blend-screen blur-[20px] opacity-0 pointer-events-none"
          style={{ boxShadow: "0 0 100px 50px rgba(212, 175, 55, 1)" }}
        />
      </div>
    </section>
  );
}
