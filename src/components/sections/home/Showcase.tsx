"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Grid from "@/components/ui/Grid";
import Glow from "@/components/ui/Glow";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import ProjectModal from "@/components/sections/projects/ProjectModal";
import { projects, resolveProject } from "@/lib/projects";
import type { Locale, Dictionary } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

export default function Showcase({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [active, setActive] = useState<Project | null>(null);
  const selected = projects.slice(0, 3).map((p) => resolveProject(p, lang));

  return (
    <section className="relative isolate overflow-hidden px-6 py-24 md:py-32">
      <Grid />
      <Glow />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs tracking-[0.45em] text-zinc-500">
              {dict.home.selectedEyebrow}
            </p>
            <h2 className="text-2xl font-light tracking-[0.14em] text-white md:text-5xl md:tracking-[0.18em]">
              {dict.home.selectedTitle}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 tracking-[0.08em] text-zinc-400">
              {dict.home.selectedSubtitle}
            </p>
          </div>

          <Link
            href={`/${lang}/projects`}
            className="group flex items-center gap-3 text-xs tracking-[0.25em] text-zinc-400 transition hover:text-white"
          >
            {dict.home.selectedAll}
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition group-hover:border-white/50">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selected.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
            >
              <ProjectCard project={project} onOpen={setActive} />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={active}
        dict={dict}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
