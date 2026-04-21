'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Special_Elite } from "next/font/google";

const typewriter = Special_Elite({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  const [logoVisible, setLogoVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBgRef = useRef<HTMLDivElement>(null);
  const linkItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("zabin-visited");
    if (!hasVisited) {
      setLogoVisible(false);
    }

    const handleReveal = () => {
      setLogoVisible(true);
      const tl = gsap.timeline();
      tl.fromTo(".nav-logo",
        { opacity: 0, x: -20, filter: "blur(5px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }
      )
        .fromTo(".nav-link-item",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
          "-=0.3"
        );
    };

    window.addEventListener("reveal-logo", handleReveal);
    return () => window.removeEventListener("reveal-logo", handleReveal);
  }, []);

  // Handle Mobile Menu Animation
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.to(menuRef.current, { display: "flex", opacity: 1, duration: 0 })
        .fromTo(menuBgRef.current,
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 0.6, ease: "expo.inOut" }
        )
        .fromTo(linkItemsRef.current?.children || [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        );
    } else {
      document.body.style.overflow = "auto";
      const tl = gsap.timeline();
      tl.to(linkItemsRef.current?.children || [], { opacity: 0, y: 10, duration: 0.2 })
        .to(menuBgRef.current, { scaleY: 0, duration: 0.5, ease: "expo.inOut" })
        .to(menuRef.current, { opacity: 0, display: "none", duration: 0 });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[101] bg-transparent py-6 px-6 md:px-24 transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link
          href="#top"
          className={`nav-logo text-2xl font-black tracking-tighter hover:text-[#b31b1b] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] ${!logoVisible ? 'opacity-0' : 'opacity-100'}`}
        >
          ZABIN.
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-link-item text-xs font-semibold text-white hover:text-[#b31b1b] transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase tracking-[0.2em] transform ${!logoVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button
          className={`md:hidden relative z-[60] text-white p-2 transition-opacity duration-300 ${!logoVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-50 hidden flex-col items-center justify-center"
      >
        <div ref={menuBgRef} className="absolute inset-0 bg-[#0d0d0d] bg-opacity-95 backdrop-blur-xl" />

        <div ref={linkItemsRef} className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className={`text-4xl font-black text-[#e8e0cc] hover:text-[#b31b1b] transition-colors uppercase tracking-widest font-serif`}
            >
              {item.name}
            </Link>
          ))}

          <div className={`mt-12 text-[#6b675e] text-[10px] tracking-[0.4em] uppercase ${typewriter.className}`}>
            — Strictly Confidential —
          </div>
        </div>
      </div>
    </header>
  );
}
