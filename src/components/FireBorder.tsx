"use client";

import { motion } from "framer-motion";

export default function FireBorder() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none">
        <defs>
          {/* Intense Fire Filter with Displacement and Multiple Radiating Glows */}
          <filter id="fire-glow" x="-50%" y="-50%" width="200%" height="200%">
            {/* Generate chaotic fractal noise (the "flames") */}
            <feTurbulence type="fractalNoise" baseFrequency="0.03 0.08" numOctaves="4" result="noise" />
            
            {/* Displace the line heavily to create wavy flame licks */}
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            
            {/* Create varying levels of blur for the inner core and the outer radiant glow */}
            <feGaussianBlur in="displaced" stdDeviation="2" result="core" />
            <feGaussianBlur in="displaced" stdDeviation="15" result="glowMedium" />
            <feGaussianBlur in="displaced" stdDeviation="40" result="glowLarge" />
            
            {/* Composite them all together for maximum intensity */}
            <feMerge>
              <feMergeNode in="glowLarge" />
              <feMergeNode in="glowMedium" />
              <feMergeNode in="core" />
              <feMergeNode in="displaced" />
            </feMerge>
          </filter>
          
          <linearGradient id="fire-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* White-hot center trailing off into intense reds */}
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="15%" stopColor="#ffea00" />
            <stop offset="50%" stopColor="#ff5e00" />
            <stop offset="100%" stopColor="#b30000" />
          </linearGradient>
        </defs>

        <motion.rect
          x="4"
          y="4"
          width="calc(100% - 8px)"
          height="calc(100% - 8px)"
          fill="none"
          stroke="url(#fire-grad)"
          strokeWidth="12"
          filter="url(#fire-glow)"
          initial={{ pathLength: 0.15, pathOffset: 0 }}
          animate={{ pathOffset: [0, -1] }} // Negative 1 to travel counter-clockwise (top to left to bottom to right)
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
