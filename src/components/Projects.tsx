"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Briefcase, Wrench } from "lucide-react";

const projects = [
  {
    id: "midnight-rain",
    fileNo: "01",
    title: "Now Score",
    subtitle: "Live Score App",
    year: "2026",
    location: "Kannur, Kerala",
    status: "CLOSED",
    description: "A real-time football arena coded under floodlights. Built to stream every goal, every whistle, every heartbeat of the match — live, relentless, and untouchable in production.",
    objectives: [
      "Custom authentication pipeline with JWT and Google OAuth",
      "WebSocket-driven match updates and instant notifications",
      "Redis-powered caching for ruthless performance",
      "Scalable REST APIs for players, matches, and users",
      "React Query orchestration for state and data shadows",
      "Dockerized services, stitched together with Compose",
      "NGINX reverse proxy guarding the gates",
      "AWS EC2 deployment, armored with SSL"
    ],
    tech: ["Next", "Redis", "Node.js", "Express.js", "MongoDB", "Docker", "Nginx"],
    image: "/images/nowScore.webp",
    rotation: -3,
    position: "mt-10 md:mt-24 ml-0 md:ml-12"
  },
  {
    id: "the-getaway",
    fileNo: "02",
    title: "CB Perfume",
    subtitle: "E-commerce Platform",
    year: "2025",
    location: "Calicut, Kerala",
    status: "ACTIVE",
    description: "A digital perfume house coded in velvet shadows. Built to showcase every scent, every bottle, every story — an online boutique that whispers luxury through the screen.",
    objectives: [
      "Full-stack e-commerce module with product listings, filters, and cart flow",
      "API-driven dynamic content for seamless catalog updates",
      "Responsive UI tuned for elegance across devices",
      "Performance optimizations for faster, smoother load times"
    ],
    tech: ["Next.js", "Redux", "Tailwind Css", "OAuth", "JWT Auth"],
    image: "/images/cb.webp",
    rotation: 2,
    position: "mt-4 md:mt-12 mx-auto"
  },
  {
    id: "the-scribe",
    fileNo: "03",
    title: "Kaffaway",
    subtitle: "E-commerce Platform",
    year: "2025",
    location: "Calicut, Kerala",
    status: "Closed",
    description: "A caffeine brand coded in motion. Built to showcase powder with cinematic scrolls — every frame a surge, every transition a hit of energy on screen.",
    objectives: [
      "Crafted a responsive e-commerce UI with elegant product flow",
      "Implemented GSAP scroll-triggered animations for immersive storytelling",
      "Optimized performance for smooth, fast interactions across devices",
      "Designed a clean, minimalist interface focused on brand impact"
    ],
    tech: ["React", "Javascript", "Tailwind Css", "Gsap"],
    image: "/images/kaffaway.webp",
    rotation: -4,
    position: "mt-24 md:mt-32 mr-0 md:mr-12"
  },
  {
    id: "top-secret",
    fileNo: "04",
    title: "Cloud Kitchen",
    subtitle: "Online Food Delivery System",
    year: "2025",
    location: "Calicut, Kerala",
    status: "Active",
    description: "A kitchen empire coded behind dashboards. Built to orchestrate restaurants, products, and orders — every click a command, every update a pulse in real time.",
    objectives: [
      "Developed core Admin Dashboard features for restaurant, product, and order management",
      "Implemented authentication and role‑based access control for secure operations",
      "Enabled real‑time order monitoring and updates",
      "Built React‑based dashboard interfaces with reusable components",
      "Designed API‑driven architecture for scalable data flow"
    ],
    tech: ["Socket.io", "Typescript", "Next.js, OAuth"],
    image: "/images/cloudkitchen.webp",
    rotation: 4,
    position: "mt-8 md:mt-16 ml-8 md:ml-24"
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="work" className="relative w-full min-h-screen bg-[#2A241D] py-20 px-4 overflow-hidden font-mono">
      {/* Wall Texture Patterns (Horizontal Lines for paneling) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #1a1612 39px, #1a1612 40px)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

      {/* Title Header */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center mb-16">
        <div className="bg-[#dfd5ad] text-[#4a4031] text-xs md:text-sm font-bold uppercase tracking-[0.3em] px-4 py-1 mb-6 border border-[#c4ba98] transform -rotate-1 shadow-sm">
          EVIDENCE BOARD - DO NOT REMOVE
        </div>
        <h2 className="text-5xl md:text-8xl font-black text-[#e8e0cc] tracking-tighter uppercase drop-shadow-xl flex gap-4 md:gap-8 font-serif items-center justify-center flex-wrap text-center">
          <span>THE</span>
          <span className="text-[#b31b1b]">MISSIONS</span>
          <span>WALL</span>
        </h2>
        <p className="mt-6 text-[#a89d87] text-sm md:text-base font-serif italic max-w-xl text-center px-4 leading-relaxed tracking-wider">
          Every job pinned. Every score documented. Pull a file — if you&apos;ve got the stomach for it.
        </p>
      </div>

      {/* Wall Container - Grid loosely scattering items */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 items-start">

        {/* Scattered Photos */}
        {projects.map((project, index) => (
          <motion.div
            layoutId={`card-container-${project.id}`}
            key={project.id}
            onClick={() => setSelectedId(project.id)}
            className={`cursor-pointer w-72 md:w-80 h-auto bg-[#efeadd] border border-[#d3ccb8] p-3 pb-8 shadow-[10px_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[15px_15px_25px_rgba(0,0,0,0.6)] ${project.position} flex-shrink-0 z-${20 - index}`}
            initial={{ rotate: project.rotation, scale: 0.95, opacity: 0 }}
            whileInView={{ rotate: project.rotation, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: project.rotation < 0 ? project.rotation - 2 : project.rotation + 2, zIndex: 30 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Top Tape */}
            <div className="absolute -top-3 -left-3 w-14 h-5 bg-[#e0d8bd] opacity-80 shadow-sm transform -rotate-12 mix-blend-multiply" />
            <div className="absolute -top-4 -right-2 w-16 h-5 bg-[#e0d8bd] opacity-80 shadow-sm transform rotate-12 mix-blend-multiply" />

            {/* Red Thumbtack */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#cc2222] shadow-[0_4px_4px_rgba(0,0,0,0.4)] border border-[#881111] z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/30 absolute top-0.5 right-0.5" />
            </div>

            {/* Polaroid Detail */}
            <div className="flex justify-between items-center mb-2 px-1">
              <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">FILE N° {project.fileNo}</span>
            </div>

            <motion.div
              layoutId={`card-image-${project.id}`}
              className="w-full aspect-square bg-[#222] relative overflow-hidden border border-[#d3ccb8]/50 shadow-inner mb-4"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover sepia-[0.3] contrast-125 hover:sepia-0 transition-all duration-500"
              />
            </motion.div>

            <h3
              className="text-lg font-black text-[#2e2b26] text-center tracking-widest uppercase font-serif"
            >
              {project.title}
            </h3>
          </motion.div>
        ))}

        {/* Modal Overlay / Case File */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/80  pointer-events-auto"
              />

              {projects.map((project) => project.id === selectedId && (
                <motion.div
                  layoutId={`card-container-${project.id}`}
                  key={`modal-${project.id}`}
                  className="relative pointer-events-auto w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#f4ebd0] text-[#332c25] shadow-[0_0_100px_rgba(0,0,0,0.9)] p-8 md:p-12 z-50 rounded-sm border border-[#d6ccb2]"
                  style={{
                    backgroundImage: 'radial-gradient(#e5dbbe 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0'
                  }}
                >
                  {/* Tape on Modal */}
                  {/* <div className="absolute top-0 left-10 w-24 h-8 bg-[#dfd6b8] opacity-80 shadow-sm mix-blend-multiply flex items-center justify-center border-b border-[#c9c0a3]" /> */}
                  {/* <div className="absolute top-0 right-10 w-24 h-8 bg-[#dfd6b8] opacity-80 shadow-sm mix-blend-multiply flex items-center justify-center border-b border-[#c9c0a3]" /> */}

                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 p-2 text-[#b31b1b] hover:bg-[#b31b1b]/10 transition-colors border border-transparent hover:border-[#b31b1b]/20"
                  >
                    <X className="w-8 h-8" />
                  </button>

                  {/* Inner content wrapped in opacity transition to avoid reflow lag */}
                  <motion.div
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ delay: 0, duration: 0 }}
                    className="flex flex-col gap-6 w-full mt-4"
                  >

                    {/* Header Info */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-black/20 pb-6 mb-2 relative">
                      {/* Stamp */}
                      <div className={`absolute top-0 right-12 md:right-32 border-4 px-4 py-1 text-2xl font-black uppercase tracking-[0.3em] transform ${project.rotation < 0 ? 'rotate-[-10deg]' : 'rotate-[12deg]'} ${project.status === 'ACTIVE' ? 'border-emerald-600 text-emerald-600' : 'border-[#b31b1b] text-[#b31b1b]'} mix-blend-multiply font-serif z-10`}>
                        {project.status}
                      </div>

                      <div className="flex flex-col gap-2 relative z-0">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                          CONFIDENTIAL DOSSIER / FILE N° {project.fileNo}
                        </span>
                        <h3
                          className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter text-[#1a1612]"
                        >
                          {project.title}
                        </h3>
                        <span className="text-[#b31b1b] font-bold tracking-widest uppercase text-sm mt-1">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 text-xs font-bold text-gray-600 uppercase tracking-widest border-b-2 border-dashed border-black/20">
                      <div>
                        <div className="text-gray-400 mb-1">YEAR</div>
                        <div className="text-[#1a1612] text-sm">{project.year}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-gray-400 mb-1">LOCATION</div>
                        <div className="text-[#1a1612] text-sm">{project.location}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">STATUS</div>
                        <div className="text-[#b31b1b] text-sm border border-[#b31b1b] px-2 py-0.5 inline-block">{project.status}</div>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex flex-col md:flex-row gap-10 mt-6">

                      {/* Left: Image Box */}
                      <div className="w-full md:w-2/5 flex flex-col gap-4">
                        {/* Tape effect over image */}
                        <div className="relative">
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#dfd6b8] opacity-90 shadow-sm mix-blend-multiply z-10" />
                          <motion.div
                            layoutId={`card-image-${project.id}`}
                            className="w-full aspect-[4/5] bg-black relative p-2 shadow-md border border-[#c4ba98]"
                          >
                            <div className="relative w-full h-full overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover grayscale contrast-125 sepia-[0.2]"
                              />
                            </div>
                            <div className="absolute inset-0 bg-[#e3d7b4]/10 mix-blend-overlay pointer-events-none" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Right: Text Information */}
                      <div className="w-full md:w-3/5 flex flex-col gap-8">

                        {/* Section: The Brief */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-[#b31b1b] font-bold uppercase tracking-widest text-sm">
                            <Briefcase className="w-5 h-5" />
                            <h4>THE BRIEF</h4>
                          </div>
                          <p className="text-sm md:text-base leading-relaxed tracking-wide text-gray-800 font-serif font-medium">
                            {project.description}
                          </p>
                        </div>

                        {/* Section: Objectives */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-[#b31b1b] font-bold uppercase tracking-widest text-sm">
                            <Target className="w-5 h-5" />
                            <h4>OBJECTIVES</h4>
                          </div>
                          <ul className="space-y-2">
                            {project.objectives.map((obj, i) => (
                              <li key={i} className="flex gap-3 text-sm md:text-base text-gray-800 font-serif font-medium">
                                <span className="text-[#b31b1b]">▹</span>
                                {obj}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="w-full h-px border-b-2 border-dashed border-black/20 my-2" />

                        {/* Section: Equipment Used */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-gray-500 font-bold uppercase tracking-widest text-sm">
                            <Wrench className="w-5 h-5" />
                            <h4>EQUIPMENT USED</h4>
                          </div>
                          <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="text-[#555] text-sm md:text-base font-bold font-mono tracking-widest line-through decoration-black/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>

                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
