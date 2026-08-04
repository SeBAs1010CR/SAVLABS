"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Grid from "@/components/ui/Grid";
import Glow from "@/components/ui/Glow";
import AmbientLines from "@/components/ui/AmbientLines";
import type { Dictionary } from "@/lib/i18n";

const COLLAGE_VIDEO =
  "https://pub-40f1330aed3b48358ef77d4a0f616c72.r2.dev/Collage%20cortos.mp4";

const CAPTURES = Array.from(
  { length: 6 },
  (_, i) => `/images/projects/coopeande/cortos-${i + 1}.png`
);

export default function GamingSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden px-6 py-28">
      <Grid />
      <Glow />
      <AmbientLines />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="text-center">
          <p className="mb-5 text-xs tracking-[0.45em] text-zinc-500">
            {dict.gaming.eyebrow}
          </p>

          <h2 className="text-4xl font-light tracking-[0.2em] md:text-6xl md:tracking-[0.3em]">
            {dict.gaming.title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 tracking-[0.08em] text-zinc-400">
            {dict.gaming.subtitle}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl"
        >
          <video
            src={COLLAGE_VIDEO}
            poster={CAPTURES[0]}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="aspect-video w-full bg-black"
          />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPTURES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={src}
                  alt={`Capture ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] tracking-[0.3em] text-zinc-500">
                  CAPTURE
                </span>
                <span className="text-[10px] tracking-[0.3em] text-zinc-500">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
