"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 0, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [0.7, 0.3]); // Gentle zoom instead of vertical movement

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.55], [40, -40]); // Subtle slide

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.9], [40, -40]); // Subtle slide

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center overflow-hidden">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, scale: scale1 }}
        className="absolute  w-full text-center top-1/2"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
          {/* HEY */}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-light tracking-wide">
          {/* Full Stack Developer. */}
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute top-1/2 left-10 md:left-24 -translate-y-1/2"
      >
        <h2 className="text-4xl md:text-6xl font-bold max-w-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          I AM ZABIN
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-1/2 right-10 md:right-24 -translate-y-1/2 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold max-w-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          FULL STACK DEVELOPER
        </h2>
      </motion.div>
    </div>
  );
}
