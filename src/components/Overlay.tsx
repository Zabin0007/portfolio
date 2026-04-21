"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 2: Fades in early and stays
  const opacity2 = useTransform(scrollYProgress, [0.11, 0.15, 0.9, 0.98], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.11, 0.17], [20, 0]);

  // Section 3: Fades in earlier and stays
  const opacity3 = useTransform(scrollYProgress, [0.16, 0.24, 0.9, 0.98], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.16, 0.24], [20, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center overflow-hidden">

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute top-[40%] md:top-1/2 left-0 md:left-24 w-full md:w-auto px-6 md:px-0 -translate-y-1/2 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-6xl font-bold max-w-[80vw] md:max-w-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mx-auto md:mx-0">
          I AM ZABIN
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-[60%] md:top-1/2 right-0 md:right-24 w-full md:w-auto px-6 md:px-0 -translate-y-1/2 text-center md:text-right"
      >
        <h2 className="text-3xl md:text-6xl font-bold max-w-[80vw] md:max-w-lg mx-auto md:ml-auto text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          FULL STACK DEVELOPER
        </h2>
      </motion.div>
    </div>
  );
}
