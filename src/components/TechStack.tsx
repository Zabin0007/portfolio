"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React.js", icon: "/images/react-logo.webp" },
  { name: "Next.js", icon: "/images/nextjs-logo.webp" },
  { name: "JavaScript (ES6+)", icon: "/images/javascript-logo.webp" },
  { name: "TypeScript", icon: "/images/Typescript.webp" },
  { name: "HTML5", icon: "/images/html-logo.webp" },
  { name: "CSS3", icon: "/images/css-logo.webp" },
  { name: "Tailwind CSS", icon: "/images/tailwind-logo.webp" },
  { name: "Material UI", icon: "/images/material-ui-logo.webp" },
  { name: "React Query", icon: "/images/react-query-logo.webp" },
  { name: "Redux", icon: "/images/redux-logo.webp" },
  { name: "Angular.js", icon: "/images/angular-logo.webp" },
  { name: "Express.js", icon: "/images/express-logo.webp" },
  { name: "Microservices", icon: "/images/microservice-logo.webp" },
  { name: "REST API", icon: "/images/rest-api-logo.webp" },
  { name: "Socket.IO", icon: "/images/socket-io-logo.webp" },
  { name: "JWT Auth", icon: "/images/jwt-logo.webp" },
  { name: "Google OAuth", icon: "/images/Oauth-logo.webp" },
  { name: "SSL", icon: "/images/ssl-logo.webp" },
  { name: "MongoDB", icon: "/images/mongodb-logo.webp" },
  { name: "Redis", icon: "/images/redis-logo.webp" },
  { name: "Docker", icon: "/images/docker-logo.webp" },
  { name: "NGINX", icon: "/images/nginx-logo.webp" },
  { name: "AWS", icon: "/images/aws-logo.webp" },
  { name: "Vercel", icon: "/images/vercel-logo.webp" },
  { name: "Netlify", icon: "/images/netlify-logo.webp" },
  { name: "Render", icon: "/images/render-logo.webp" },
  { name: "GitHub", icon: "/images/github-logo.webp" },
  { name: "CI/CD", icon: "/images/cicd-logo.webp" },
  { name: "Postman", icon: "/images/postman-logo.webp" },
];

export default function TechStack() {
  // outerRef = the tall scroll container
  const outerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".ts-card");

    // Hide all cards at scale 0 — no x/y offset so they never appear outside grid
    gsap.set(cards, { opacity: 0, scale: 0.05, filter: "blur(16px)", y: 0, x: 0 });

    const mm = gsap.matchMedia();

    // ── Shared animation builder ──
    function buildTimeline(startY: number) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
        },
      });

      cards.forEach((card, i) => {
        const startTime = i * 0.35;

        // Muzzle flash + camera shake — real-time callback (NOT scrubbed)
        tl.add(() => {
          gsap.fromTo(".ts-bg img",
            { filter: "brightness(2) contrast(1.5)" },
            { filter: "brightness(0.5) contrast(1.2)", duration: 0.3 }
          );
          gsap.fromTo(".ts-sticky",
            { x: -5, y: 2 },
            { x: 5, y: -2, yoyo: true, repeat: 3, duration: 0.05, clearProps: "all", ease: "none" }
          );
        }, startTime);

        // Card expands from scale 0 — stays in its grid cell, no edge bleed
        tl.fromTo(
          card,
          { opacity: 0, scale: 0.05, filter: "blur(16px)", y: startY },
          {
            opacity: 1, scale: 1, filter: "blur(0px)", y: 0,
            ease: "power3.out", duration: 0.14
          },
          startTime
        );

        // Gold glow — real-time callback so it always fires at full speed
        tl.add(() => {
          gsap.fromTo(card,
            { boxShadow: "0 0 20px gold" },
            { boxShadow: "0 0 0px transparent", duration: 0.4, ease: "power2.out" }
          );
        }, startTime + 0.05);
      });

      tl.to({}, { duration: 0.2 });
    }

    // Desktop
    mm.add("(min-width: 769px)", () => {
      buildTimeline(-15); // subtle upward entry
    });

    // Mobile: same sync, tighter entry
    mm.add("(max-width: 768px)", () => {
      gsap.set(cards, { opacity: 0, scale: 0.05, filter: "blur(16px)", y: 0 });
      buildTimeline(-10);
    });

    return () => mm.revert();
  }, { scope: outerRef });



  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ── Tall outer: gives the scroll budget ── */
        .ts-outer {
          /* 120px per card + 600px hold room */
          height: calc(${skills.length} * 120px + 600px);
          position: relative;
        }

        /* ── Sticky inner: locks in viewport like ScrollyCanvas ── */
        .ts-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          /* NO overflow:hidden here — it clips animating cards coming in from edges */
        }

        .ts-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden; /* only clip the background image */
        }
        .ts-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.5) contrast(1.2);
        }
        .ts-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1;
        }

        .ts-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem 2rem 1.5rem;
          overflow: hidden; /* clips grid cleanly within the sticky frame */
        }

        .ts-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 1.5rem;
          flex-shrink: 0;
        }

        .ts-badge {
          background: #dfd5ad;
          color: #4a4031;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 0.2rem 0.9rem;
          border: 1px solid #c4ba98;
          transform: rotate(-1deg);
          box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
          margin-bottom: 0.75rem;
          font-family: sans-serif;
        }

        .ts-title {
          font-size: clamp(2.2rem, 6vw, 5rem);
          font-weight: 900;
          color: #e8e0cc;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          font-family: serif;
          text-shadow: 0 4px 20px rgba(0,0,0,0.9);
          line-height: 1;
          white-space: nowrap;
        }

        .ts-subtitle {
          font-size: 0.8rem;
          color: rgba(168,157,135,0.9);
          font-style: italic;
          font-family: serif;
          letter-spacing: 0.05em;
          margin-top: 0.5rem;
          max-width: 480px;
        }

        .ts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(106px, 1fr));
          gap: 1rem;
          width: 100%;
          max-width: 1200px;
          overflow-y: auto;
          padding-bottom: 0.5rem;
        }

        /* hide scrollbar inside grid */
        .ts-grid::-webkit-scrollbar { display: none; }

        .ts-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.75rem 0.5rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          backdrop-filter: blur(8px);
          cursor: default;
          transition: background 0.3s, border-color 0.3s;
          /* GSAP sets opacity:0 initially via JS */
        }
        .ts-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,215,0,0.5);
        }
        .ts-card-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ts-card-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .ts-card-label {
          font-family: sans-serif;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.85);
          text-align: center;
          font-weight: 600;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .ts-title { font-size: clamp(1.6rem, 8vw, 2.8rem); white-space: normal; }
          .ts-badge { font-size: 0.6rem; }
          .ts-subtitle { font-size: 0.7rem; }
          .ts-header { margin-bottom: 1rem; }
          .ts-content {
            padding: 5rem 1rem 1rem; /* extra top padding so first card row is never clipped */
          }
          .ts-grid {
            grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
            gap: 0.7rem;
            padding-top: 0.5rem; /* buffer so scale animation doesn't clip at top */
          }
          .ts-card-icon { width: 34px; height: 34px; }
          .ts-card-label { font-size: 0.6rem; }
        }
      `}} />

      {/* ── Tall outer container (scroll budget) ── */}
      <div ref={outerRef} id="services" className="ts-outer">

        {/* ── Sticky inner (stays locked in view) ── */}
        <div className="ts-sticky">
          <div className="ts-bg">
            <Image
              src="/images/tech.webp"
              alt="Tech background"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.5) contrast(1.2)" }}
              priority
            />
            <div className="ts-overlay" />
          </div>

          <div className="ts-content">
            <div className="ts-header">
              <div className="ts-badge"> INVENTORY</div>
              <h2 className="ts-title">
                THE&nbsp;<span style={{ color: '#b31b1b' }}>ARSENAL</span>
              </h2>

              <p className="ts-subtitle">
                Every tool sharpened. Every weapon loaded. The full kit — if you can handle it.
              </p>
            </div>

            <div className="ts-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="ts-card">
                  <div className="ts-card-icon">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={42}
                      height={42}
                      className="object-contain"
                    />
                  </div>
                  <div className="ts-card-label">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}