"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  return (
    <main className="relative isolate h-screen overflow-hidden bg-black text-white">

      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] md:h-[500px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      {/* Electricidad ambiente */}
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
        className="absolute top-[30%] h-[2px] w-[400px] bg-white blur-[1px] shadow-[0_0_20px_white]"
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
        className="absolute top-[60%] right-0 h-[2px] w-[500px] bg-white blur-[1px] shadow-[0_0_20px_white]"
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
        className="absolute left-[25%] w-[2px] h-[300px] bg-white blur-[1px] shadow-[0_0_20px_white]"
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
        className="absolute right-[30%] bottom-0 w-[2px] h-[400px] bg-white blur-[1px] shadow-[0_0_20px_white]"
      />

      {/* Transición */}
      {transitioning && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0.15, 0.4, 0.7, 1] }}
            transition={{
              duration: 6,
              ease: "easeInOut",
            }}
            className="absolute inset-0 z-30 bg-black"
          />

          {[...Array(220)].map((_, i) => {
            const horizontal = Math.random() > 0.5;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scaleX: horizontal ? 0 : 1,
                  scaleY: horizontal ? 1 : 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: horizontal ? [0, 1, 1] : 1,
                  scaleY: horizontal ? 1 : [0, 1, 1],
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.02,
                  ease: "linear",
                }}
                className="absolute z-40 bg-white shadow-[0_0_18px_white]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: horizontal
                    ? `${60 + Math.random() * 180}px`
                    : "2px",
                  height: horizontal
                    ? "2px"
                    : `${60 + Math.random() * 180}px`,
                }}
              />
            );
          })}
        </>
      )}

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >

        {/* Logos */}
        <div className="flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/images/Psav.png"
              alt="SAV"
              width={500}
              height={500}
              className="
                w-[260px]
                md:w-[420px]
                drop-shadow-[0_0_15px_rgba(255,255,255,0.45)]
                brightness-110
              "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Image
              src="/images/Plabs.png"
              alt="LABS"
              width={450}
              height={450}
              className="
                w-[180px]
                md:w-[260px]
                drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]
                brightness-110
              "
            />
          </motion.div>
        </div>

        {/* Texto */}
        <p className="mt-2 text-[10px] md:text-sm tracking-[0.25em] md:tracking-[0.4em] text-zinc-400">
          TECHNOLOGY • DEVELOPMENT • GAMING
        </p>

        {/* Botón */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setTransitioning(true);

            setTimeout(() => {
              router.push("/home");
            }, 6000);
          }}
          className="
            mt-5
            rounded-xl
            border
            border-white/30
            px-6
            py-3
            md:px-8
            md:py-4
            text-base
            md:text-lg
            text-white
            backdrop-blur-sm
            transition
            hover:bg-white/10
            hover:border-white
            relative
            overflow-hidden
          "
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-y-0 left-0 w-20 bg-white/40 blur-xl"
          />

          <span className="relative z-10">Explore</span>
        </motion.button>
      </motion.div>
    </main>
  );
}

