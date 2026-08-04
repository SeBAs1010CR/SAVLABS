"use client";

import { motion } from "framer-motion";

export default function GeometricPulse() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="overflow-visible"
      >
        {/* Outer rotating square */}
        <motion.rect
          x="100"
          y="100"
          width="200"
          height="200"
          fill="none"
          stroke="white"
          strokeWidth="1"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Inner diamond */}
        <motion.rect
          x="140"
          y="140"
          width="120"
          height="120"
          fill="none"
          stroke="white"
          strokeWidth="1"
          animate={{
            rotate: [45, -45, 45],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Connecting lines */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1="200"
            y1="200"
            x2={200 + Math.cos((i * Math.PI) / 4) * 150}
            y2={200 + Math.sin((i * Math.PI) / 4) * 150}
            stroke="white"
            strokeWidth="1"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}