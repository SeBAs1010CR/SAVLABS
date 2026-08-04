"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

const stars = Array.from({ length: 90 }, (_, i) => ({
  x: (i * 37.3) % 100,
  y: (i * 53.7 + 17) % 100,
  size: 1 + ((i * 7) % 3),
  delay: ((i % 12) / 12) * 4,
  duration: 2 + ((i * 13) % 40) / 10,
}));

export default function HomeHero({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const auroraX = useTransform(sx, [-0.5, 0.5], [-40, 40]);
  const auroraY = useTransform(sy, [-0.5, 0.5], [-30, 30]);
  const ringX = useTransform(sx, [-0.5, 0.5], [15, -15]);
  const ringY = useTransform(sy, [-0.5, 0.5], [12, -12]);

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-24 text-center"
    >
      {/* Aurora */}
      <motion.div
        style={{ x: auroraX, y: auroraY }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ x: [-50, 50, -30], y: [-40, 40, -20], scale: [1, 1.2, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[130px]"
        />
        <motion.div
          animate={{ x: [40, -50, 30], y: [30, -40, 20], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-1/5 h-[560px] w-[560px] rounded-full bg-violet-600/20 blur-[140px]"
        />
        <motion.div
          animate={{ x: [-30, 30, -20], y: [40, -30, 40], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-1/3 h-[480px] w-[480px] rounded-full bg-fuchsia-600/15 blur-[130px]"
        />
      </motion.div>

      {/* Starfield */}
      {stars.map((star, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
          animate={{ opacity: [0.05, 0.9, 0.05] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Orbiting rings */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden md:block"
        aria-hidden
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        >
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10 rounded-full border border-white/5"
        >
          <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          <span className="absolute top-1/2 -left-1 h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa]" />
        </motion.div>
        <div className="absolute inset-24 rounded-full border border-white/[0.03]" />
      </motion.div>

      {/* Perspective grid floor */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh]"
        style={{ perspective: "620px" }}
        aria-hidden
      >
        <motion.div
          animate={{ backgroundPosition: ["0 0", "0 60px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 origin-bottom opacity-[0.13] [transform:rotateX(72deg)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Sweeping scanline */}
      <motion.div
        animate={{ top: ["-10%", "110%"], opacity: [0, 0.6, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 3,
        }}
        className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 text-[10px] tracking-[0.45em] text-zinc-400 md:text-xs"
        >
          <span className="hidden h-px w-10 bg-zinc-500 sm:block" />
          {dict.home.eyebrow}
          <span className="hidden h-px w-10 bg-zinc-500 sm:block" />
        </motion.p>

        <div className="relative mt-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.92, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative text-[clamp(2.6rem,11vw,11rem)] font-light leading-none tracking-[0.12em] text-white [text-shadow:0_0_30px_rgba(255,255,255,0.45),0_0_90px_rgba(34,211,238,0.35)] md:tracking-[0.16em]"
          >
            {dict.home.heroTitle}
          </motion.h1>

          <span
            aria-hidden
            className="animate-[glitch-cyan_4s_infinite_linear] pointer-events-none absolute inset-0 select-none text-[clamp(2.6rem,11vw,11rem)] font-light leading-none tracking-[0.12em] text-cyan-400 mix-blend-screen md:tracking-[0.16em]"
          >
            {dict.home.heroTitle}
          </span>
          <span
            aria-hidden
            className="animate-[glitch-magenta_5s_infinite_linear] pointer-events-none absolute inset-0 select-none text-[clamp(2.6rem,11vw,11rem)] font-light leading-none tracking-[0.12em] text-fuchsia-500 mix-blend-screen md:tracking-[0.16em]"
          >
            {dict.home.heroTitle}
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 max-w-xl text-sm leading-7 tracking-[0.08em] text-zinc-400 md:text-base"
        >
          {dict.home.heroSubtitle}
          <span className="mt-2 block text-white">
            {dict.home.heroSubtitle2}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href={`/${lang}/projects`}
            className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-xs font-medium tracking-[0.25em] text-black transition hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
          >
            <span className="relative z-10">{dict.home.heroPrimary}</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            href={`/${lang}/contact`}
            className="rounded-xl border border-white/25 px-8 py-4 text-xs tracking-[0.25em] text-white transition hover:border-white hover:bg-white/5"
          >
            {dict.home.heroSecondary}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] text-zinc-500">
          {dict.home.scroll}
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-white/10">
          <motion.span
            animate={{ y: ["-100%", "300%"] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-3 w-px bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
