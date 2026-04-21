"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { UnifrakturMaguntia, Special_Elite, Playfair_Display } from "next/font/google";

// We use Special Elite for a true typewriter feel, or Space Mono. Special Elite is perfectly gritty.
const blackletter = UnifrakturMaguntia({ weight: "400", subsets: ["latin"] });
const typewriter = Special_Elite({ weight: "400", subsets: ["latin"] });
const serif = Playfair_Display({ weight: ["400", "700"], subsets: ["latin"], style: ["normal", "italic"] });

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const splattersRef = useRef<HTMLDivElement>(null);
  const smokeRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const parchmentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [dealSecured, setDealSecured] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.name.trim() !== "" && 
                     formData.contact.trim() !== "" && 
                     formData.message.trim() !== "";

  const { contextSafe } = useGSAP({ scope: containerRef });

  const secureDeal = contextSafe((e: React.MouseEvent) => {
    e.preventDefault();
    if (dealSecured) return;
    setDealSecured(true);

    const tl = gsap.timeline();

    // Hide Button
    tl.to(buttonRef.current, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.2
    });

    // 1. Slam the Wax Seal Down
    tl.fromTo(sealRef.current,
      { y: -600, scale: 2, opacity: 1, rotation: -20 },
      { y: 0, scale: 1, rotation: 5, duration: 0.4, ease: "power4.in" }
    );

    // 2. The Impact (Screen Shake)
    tl.to(containerRef.current, {
      y: 10,
      duration: 0.05,
      yoyo: true,
      repeat: 5,
      ease: "rough({ template: power1.out, strength: 3, points: 10, taper: 'none', randomize: true, clamp: false })"
    }, "-=0.05");

    // 3. Splatters & Smoke
    const splatters = splattersRef.current?.children;
    if (splatters) {
      tl.fromTo(splatters,
        { scale: 0, opacity: 1, x: 0, y: 0, rotation: 0 },
        {
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
          rotation: () => gsap.utils.random(0, 360),
          scaleX: () => gsap.utils.random(1, 4), // Stretch into streak
          scaleY: () => gsap.utils.random(0.5, 1.5),
          opacity: 1, // Keep them on the page
          duration: 0.4,
          ease: "power4.out"
        },
        "-=0.1"
      );
    }

    const smoke = smokeRef.current?.children;
    if (smoke) {
      tl.fromTo(smoke,
        { scale: 0.5, opacity: 0.8, y: 0, x: 0, filter: "blur(5px)" },
        {
          y: () => gsap.utils.random(-50, -150),
          x: () => gsap.utils.random(-50, 50),
          scale: () => gsap.utils.random(2, 5),
          opacity: 0,
          filter: "blur(20px)",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.1
        },
        "-=0.5"
      );
    }

    // 4. Show Success Layer
    tl.to(successRef.current, {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1,
      ease: "power2.inOut"
    }, "+=0.3");
  });

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full min-h-screen py-24 flex flex-col items-center justify-start overflow-hidden bg-[#241A13]"
    >
      {/* Wood Textures */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: 'repeating-linear-gradient(rgba(0,0,0,0.3) 0px, transparent 1px, transparent 4px, rgba(0,0,0,0.3) 5px)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

      {/* Header Area */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 mb-12">
        <span className={`text-[#d4af37] text-[9px] md:text-[10px] tracking-[0.4em] uppercase mb-4 ${typewriter.className}`}>
          Strictly Confidential
        </span>
        <h2 className="font-black text-[#e8e0cc] tracking-tighter uppercase drop-shadow-xl font-serif text-center whitespace-nowrap" style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}>
          The <span className="text-[#b31b1b]">Family&apos;s</span> Word
        </h2>
        <p className={`text-[#a89d87] text-xs md:text-sm max-w-lg leading-loose mx-auto font-serif italic`}>
          You scratch our back, we scratch yours. Sign the paper, seal the deal.<br />
          Nobody walks away unhappy. Capisce?
        </p>
      </div>

      {/* Contract / Parchment */}
      <div
        ref={parchmentRef}
        className="relative z-20 max-w-3xl mx-auto bg-[#e5dbbe] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#c4ba98] px-8 md:px-16 py-16 text-[#2b2722] mt-4"
        style={{
          width: 'calc(100% - 2rem)',
          backgroundImage: 'url("/images/noise.png")',
          boxShadow: 'inset 0 0 100px rgba(139,115,85,0.2), 0 30px 60px rgba(0,0,0,0.6)'
        }}
      >
        {/* White Corner Tapes */}
        <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
          <div className="absolute -top-6 -left-6 w-24 h-12 bg-white/70 rotate-[-45deg] shadow-sm mix-blend-overlay"></div>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute -top-6 -right-6 w-24 h-12 bg-white/70 rotate-[45deg] shadow-sm mix-blend-overlay"></div>
        </div>

        {/* Paper Header */}
        <div className="text-center mb-10">
          <div className={`text-[#7c6954] text-[9px] tracking-[0.2em] mb-4 ${typewriter.className}`}>
            ANNO DOMINI MMXXVII | NO. 0078
          </div>
          <h3 className={`font-black tracking-tight text-[#1a1815] mb-2 whitespace-nowrap ${serif.className}`} style={{ fontSize: 'clamp(1.4rem, 5vw, 3rem)' }}>
            ARTICLES OF AGREEMENT
          </h3>
          <div className={`text-[#7c6954] italic text-xs tracking-widest ${serif.className}`}>
            between the undersigned and the family
          </div>
        </div>

        {/* Form Fields */}
        <form className={`flex flex-col gap-8 w-full mt-10 ${typewriter.className} text-sm md:text-base`}>

          {/* Input 1 */}
          <div className="flex flex-col sm:flex-row items-baseline gap-4 w-full">
            <span className="shrink-0 font-bold">I, the undersigned</span>
            <div className="relative flex-1 w-full border-b border-dashed border-[#8a7f6c]">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="your good name"
                className="w-full bg-transparent border-none outline-none text-[#5c2a2a] placeholder-[#8a7f6c]/50 pb-1 font-bold"
              />
            </div>
          </div>

          {/* Input 2 */}
          <div className="flex flex-col sm:flex-row items-baseline gap-4 w-full">
            <span className="shrink-0 font-bold">reachable by wire at No.</span>
            <div className="relative flex-1 w-full border-b border-dashed border-[#8a7f6c]">
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="+1 555 0123"
                className="w-full bg-transparent border-none outline-none text-[#5c2a2a] placeholder-[#8a7f6c]/50 pb-1 font-bold"
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="flex flex-col gap-4 mt-4 w-full">
            <span className="font-bold text-[11px] tracking-widest text-[#5c2a2a]">HEREBY AGREE TO THE FOLLOWING TERMS -</span>
            <div className="relative w-full border-b border-dashed border-[#8a7f6c] min-h-[60px]">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="State your business. Be specific. We don't like surprises."
                className="w-full h-full bg-transparent border-none outline-none resize-none text-[#1a1815] placeholder-[#8a7f6c]/50 pb-1"
              ></textarea>
              {/* Fake dashed lines for textarea */}
              <div className="absolute top-[28px] left-0 w-full border-b border-dashed border-[#8a7f6c] pointer-events-none"></div>
              <div className="absolute top-[56px] left-0 w-full border-b border-dashed border-[#8a7f6c] pointer-events-none"></div>
            </div>
          </div>

        </form>

        {/* Terms Box */}
        <div className="mt-12 p-4 md:p-6 border border-[#a89b82] relative bg-[#e0d3b6]/50 shadow-inner">
          <p className={`text-[11px] md:text-xs leading-relaxed text-[#5a5247] ${serif.className}`}>
            This here arrangement is binding upon the moment the seal hits the paper. No take-backs, no squeals. The Family will be in touch within twenty-four hours, give or take a sunrise.
          </p>
        </div>

        {/* Signatures */}
        <div className="flex justify-between items-end mt-16 px-4">
          <div className="flex flex-col items-center">
            <span className={`text-[#1a1815] text-lg mb-1 opacity-50 ${serif.className} italic`}>- signature -</span>
            <div className={`text-[8px] tracking-[0.2em] text-[#5a5247] uppercase ${typewriter.className} font-bold`}>
              THE UNDERSIGNED
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className={`text-[#1a1815] text-3xl mb-1 ${blackletter.className}`}>zabi</span>
            <div className={`text-[8px] tracking-[0.2em] text-[#5a5247] uppercase ${typewriter.className} font-bold`}>
              ON BEHALF OF THE FAMILY
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-16 relative">
          <button
            ref={buttonRef}
            onClick={secureDeal}
            disabled={!isFormValid || dealSecured}
            className={`relative z-10 px-12 py-4 bg-gradient-to-b from-[#8a1c1c] to-[#4a0d0d] text-[#eedebf] text-sm md:text-base tracking-[0.3em] font-bold shadow-[0_5px_15px_rgba(100,20,20,0.5),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-3px_0_rgba(0,0,0,0.3)] hover:brightness-110 active:translate-y-1 transition-all disabled:opacity-40 disabled:grayscale disabled:cursor-not-allowed disabled:brightness-75 disabled:shadow-none disabled:active:translate-y-0 ${typewriter.className}`}
          >
            SEAL THE DEAL
          </button>

          {/* Hidden Wax Seal Element for Animation */}
          <div
            ref={sealRef}
            className="absolute top-1/2 left-1/2 -ml-16 -mt-16 w-32 h-32 opacity-0 pointer-events-none z-50 flex items-center justify-center font-black"
          >
            {/* Wax Seal SVG or CSS Render */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#b32424] to-[#590d0d] shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_5px_10px_rgba(255,255,255,0.2)] border-2 border-[#590d0d] flex items-center justify-center">
              <span className={`text-[#ffd700] text-4xl opacity-80 mix-blend-overlay ${blackletter.className}`}>V</span>
            </div>
          </div>

          {/* Hidden Splatters */}
          <div ref={splattersRef} className="absolute top-1/2 left-1/2 pointer-events-none z-40">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#8a1c1c] opacity-0"
              />
            ))}
          </div>

          {/* Hidden Smoke */}
          <div ref={smokeRef} className="absolute top-1/2 left-1/2 pointer-events-none z-40">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 rounded-full bg-black/60 opacity-0 mix-blend-overlay"
              />
            ))}
          </div>
        </div>

        {/* Decorative Bottom */}
        <div className={`absolute -bottom-10 left-0 w-full text-center text-[#5c5440] text-[8px] tracking-[0.4em] ${typewriter.className}`}>
          + WHAT HAPPENS HERE, STAYS HERE +
        </div>
      </div>

      {/* Success Modal */}
      <div
        ref={successRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 opacity-0 pointer-events-none backdrop-blur-sm"
      >
        <div className="text-center flex flex-col items-center">
          <div className="mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#b32424] to-[#590d0d] border border-[#ff6b6b]/30 shadow-[0_0_50px_rgba(179,36,36,0.6)] flex items-center justify-center">
            <span className={`text-[#ffd700] text-6xl opacity-90 ${blackletter.className}`}>V</span>
          </div>
          <h2 className={`text-4xl md:text-6xl text-[#d4ccb8] mb-6 ${blackletter.className}`}>
            Deal Sealed
          </h2>
          <p className={`text-[#a89d87] text-lg tracking-widest ${typewriter.className}`}>
            Welcome to the Family.
          </p>
        </div>
      </div>
    </section>
  );
}
