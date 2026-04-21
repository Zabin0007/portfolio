"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
});

export default function Preloader() {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("zabin-visited");
    setIsMobile(window.innerWidth < 768);

    if (!hasVisited) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    if (!show) return;

    const letters = lettersRef.current?.children;
    if (!letters) return;

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("zabin-visited", "true");
        setShow(false);
        document.body.style.overflow = "auto";
      }
    });

    // 1. Initial State: Hidden and slightly below
    gsap.set(letters, {
      opacity: 0,
      y: 50,
      scale: 1.2,
      filter: "blur(10px)"
    });

    // 2. Entrance: Fade in and rise
    tl.to(letters, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 2,
      stagger: 0.2,
      ease: "expo.out"
    });

    // 3. Pause
    tl.to({}, { duration: 1 });

    // 4. Departure: Move to Navbar position and sync background fade
    const target = document.querySelector(".nav-logo");

    if (target) {
      const targetBounds = target.getBoundingClientRect();
      const containerBounds = containerRef.current?.getBoundingClientRect();

      if (containerBounds) {
        const lettersBounds = lettersRef.current?.getBoundingClientRect();
        if (lettersBounds) {
          const moveX = (targetBounds.left + targetBounds.width / 2) - (lettersBounds.left + lettersBounds.width / 2);
          const moveY = (targetBounds.top + targetBounds.height / 2) - (lettersBounds.top + lettersBounds.height / 2);

          // Move letters and fade container simultaneously
          tl.to(letters, {
            x: moveX,
            y: moveY,
            scale: 0.25,
            opacity: 0,
            duration: 2,
            stagger: 0.1,
            ease: "expo.inOut",
            onStart: () => {
              // Dispatch reveal earlier during the move
              setTimeout(() => {
                window.dispatchEvent(new Event("reveal-logo"));
              }, 1800); // Trigger just before they land
            }
          }, "+=0.5");

          tl.to(containerRef.current, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut"
          }, "<+=0.5"); // Fade bg while letters move
        }
      }
    } else {
      // Fallback
      tl.to(letters, {
        x: isMobile ? -150 : -400,
        y: -300,
        scale: 0.2,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: "expo.inOut",
      }, "+=0.5");

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut"
      }, "<");
    }

  }, [show, isMobile]);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
    >
      <div
        ref={lettersRef}
        className={`${playfair.className} flex gap-2 md:gap-4 text-6xl md:text-9xl font-black tracking-tighter text-white uppercase`}
      >
        <span className="opacity-0">Z</span>
        <span className="opacity-0">A</span>
        <span className="opacity-0">B</span>
        <span className="opacity-0">I</span>
        <span className="opacity-0">N</span>
        <span className="opacity-0 text-[#b31b1b]">.</span>
      </div>
    </div>
  );
}
