"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import type { Dictionary } from "@/lib/i18n";

export default function FeaturedProject({
  project,
  dict,
  onOpen,
}: {
  project: Project;
  dict: Dictionary;
  onOpen: (project: Project) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const handleLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
    >
      <div className="grid md:grid-cols-12">
        <div className="flex flex-col justify-center p-8 md:col-span-5 md:p-12">
          <p className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-zinc-500">
            <span className="h-px w-10 bg-white/30" />
            {dict.projects.featured}
          </p>

          <h2 className="mt-6 text-3xl font-light tracking-[0.08em] text-white md:text-5xl">
            {project.title}
          </h2>

          <p className="mt-6 text-sm leading-7 tracking-[0.06em] text-zinc-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-[0.2em] text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onOpen(project)}
            className="mt-10 inline-flex w-fit cursor-pointer items-center gap-3 rounded-xl border border-white/20 px-6 py-3 text-xs tracking-[0.25em] transition hover:border-white hover:bg-white hover:text-black"
          >
            {dict.projects.viewCase}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden md:col-span-7 md:aspect-auto md:min-h-[560px]">
          {project.video ? (
            <video
              ref={videoRef}
              src={project.video}
              poster={project.image}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 md:bg-gradient-to-r" />

          <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[10px] tracking-[0.3em] text-white backdrop-blur-md">
            {project.year}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
