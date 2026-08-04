"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Grid from "@/components/ui/Grid";
import Glow from "@/components/ui/Glow";
import AmbientLines from "@/components/ui/AmbientLines";
import type { Dictionary } from "@/lib/i18n";

export default function ServicesSection({ dict }: { dict: Dictionary }) {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang ?? "en";
  const services = dict.services.items;

  return (
<section className="relative isolate min-h-screen overflow-hidden px-6 pt-32 pb-20">
  
  <Grid />
  <Glow />
  <AmbientLines />

  <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20">
    
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl"
    >
      <p className="mb-5 text-xs tracking-[0.45em] text-zinc-500">
        {dict.services.eyebrow}
      </p>

      <h1 className="text-5xl font-light tracking-[0.18em] md:text-8xl">
        {dict.services.title}
      </h1>

      <p className="mt-8 max-w-2xl text-sm leading-7 tracking-[0.08em] text-zinc-400 md:text-base">
        {dict.services.subtitle}
      </p>
    </motion.div>

    <div className="grid gap-5 md:grid-cols-2">
      {services.map((service, index) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15 * index,
            ease: "easeOut",
          }}
          className="group relative min-h-[260px] overflow-hidden border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/[0.06]"
        >
          <div className="absolute right-6 top-6 text-6xl font-light tracking-widest text-white/[0.04] transition group-hover:text-white/[0.08]">
            {service.number}
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between gap-12">
            <div>
              <p className="mb-5 text-xs tracking-[0.35em] text-zinc-600">
                {service.number}
              </p>

              <h2 className="text-2xl font-light tracking-[0.14em] md:text-3xl">
                {service.title}
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <p className="max-w-xl text-sm leading-7 tracking-[0.05em] text-zinc-400">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 px-3 py-1 text-[10px] tracking-[0.15em] text-zinc-500 transition group-hover:border-white/30 group-hover:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
        </motion.article>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.7 }}
      className="flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center"
    >
      <div>
        <h2 className="text-2xl font-light tracking-[0.18em]">
          {dict.services.readyTitle}
        </h2>
        <p className="mt-3 text-sm tracking-[0.08em] text-zinc-500">
          {dict.services.readySubtitle}
        </p>
      </div>

      <Link
        href={`/${lang}/contact`}
        className="border border-white/20 px-7 py-4 text-sm tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
      >
        {dict.services.start}
      </Link>
    </motion.div>
  </div>
</section>
  );
}