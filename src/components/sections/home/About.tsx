"use client";

import { motion } from "framer-motion";
import Grid from "@/components/ui/Grid";
import Glow from "@/components/ui/Glow";
import GeometricPulse from "@/components/ui/GeometricPulse";
import type { Dictionary } from "@/lib/i18n";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 md:py-32">
      <Grid />
      <Glow />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 md:gap-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-5 flex items-center gap-4 text-xs tracking-[0.45em] text-zinc-500">
            <span className="h-px w-10 bg-white/30" />
            {dict.home.aboutEyebrow}
          </p>

          <h2 className="text-3xl font-light tracking-[0.16em] text-white md:text-5xl">
            {dict.home.aboutTitle}
          </h2>

          <div className="mt-8 space-y-5">
            {dict.home.aboutText.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-sm leading-7 tracking-[0.06em] text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-10 space-y-6 border-t border-white/10 pt-8">
            {dict.home.aboutList.map((item, i) => (
              <li
                key={item.title}
                className="group flex items-start gap-5"
              >
                <span className="mt-0.5 text-[10px] tracking-[0.3em] text-zinc-600 transition-colors group-hover:text-white">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm tracking-[0.2em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-6 tracking-[0.05em] text-zinc-500">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Geometric visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-[480px] w-[480px] rounded-full bg-white/[0.03] blur-2xl" />
          <div className="absolute h-[340px] w-[340px] rounded-full border border-white/5" />

          <div className="relative h-[440px] w-[440px]">
            <GeometricPulse />
          </div>

          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-6 h-[180px] w-[180px] opacity-60"
          >
            <GeometricPulse />
          </motion.div>

          <div className="absolute right-2 top-6 flex flex-col gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
