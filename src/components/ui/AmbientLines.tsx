"use client";

import { motion } from "framer-motion";

export default function AmbientLines() {
  return (
    <>
      <motion.div
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-5 top-[30%] h-[2px] w-[400px] bg-white blur-[1px] shadow-[0_0_20px_white]"
      />

      <motion.div
        animate={{
          x: ["100%", "-100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-5 top-[60%] right-0 h-[2px] w-[500px] bg-white blur-[1px] shadow-[0_0_20px_white]"
      />

      <motion.div
        animate={{
          y: ["-100%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-5 left-[25%] w-[2px] h-[300px] bg-white blur-[1px] shadow-[0_0_20px_white]"
      />

      <motion.div
        animate={{
          y: ["100%", "-100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-5 right-[30%] bottom-0 w-[2px] h-[400px] bg-white blur-[1px] shadow-[0_0_20px_white]"
      />
    </>
  );
}