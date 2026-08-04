"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

type TransitionLine = {
  horizontal: boolean;
  top: string;
  left: string;
  width: string;
  height: string;
};

function createTransitionLines(): TransitionLine[] {
  return Array.from({ length: 220 }, () => {
    const horizontal = Math.random() > 0.5;
    const length = `${60 + Math.random() * 180}px`;

    return {
      horizontal,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: horizontal ? length : "2px",
      height: horizontal ? "2px" : length,
    };
  });
}

export default function Hero({ dict }: { dict: Dictionary }) {
  const router = useRouter();
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang ?? "en";
  const [transitioning, setTransitioning] = useState(false);
  const [transitionLines, setTransitionLines] = useState<TransitionLine[]>([]);

  return (
    <>
      {/* Transition Overlay */}
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

          {transitionLines.map((line, i) => (
            <motion.div
              key={`${line.top}-${line.left}-${i}`}
              initial={{
                opacity: 0,
                scaleX: line.horizontal ? 0 : 1,
                scaleY: line.horizontal ? 1 : 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: line.horizontal ? [0, 1, 1] : 1,
                scaleY: line.horizontal ? 1 : [0, 1, 1],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.02,
                ease: "linear",
              }}
              className="absolute z-40 bg-white shadow-[0_0_18px_white]"
              style={{
                top: line.top,
                left: line.left,
                width: line.width,
                height: line.height,
              }}
            />
          ))}
        </>
      )}

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
              src="/images/branding/Psav.png"
              alt="SAV"
              width={500}
              height={500}
              className="w-[260px] md:w-[420px] drop-shadow-[0_0_15px_rgba(255,255,255,0.45)] brightness-110"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Image
              src="/images/branding/Plabs.png"
              alt="LABS"
              width={450}
              height={450}
              className="w-[180px] md:w-[260px] drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] brightness-110"
            />
          </motion.div>
        </div>

        {/* Texto */}
        <p className="mt-2 text-[10px] md:text-sm tracking-[0.25em] md:tracking-[0.4em] text-zinc-400">
          {dict.open.tagline}
        </p>

        {/* Botón */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setTransitionLines(createTransitionLines());
            setTransitioning(true);

            setTimeout(() => {
              router.push(`/${lang}/home`);
            }, 6000);
          }}
          className="mt-5 rounded-xl border border-white/30 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white relative overflow-hidden"
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

          <span className="relative z-10">{dict.open.explore}</span>
        </motion.button>
      </motion.div>
    </>
  );
}
