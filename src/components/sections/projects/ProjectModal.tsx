"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import type { Dictionary } from "@/lib/i18n";

type GalleryItem = { type: "video" | "image"; src: string };

export default function ProjectModal({
  project,
  dict,
  onClose,
}: {
  project: Project | null;
  dict: Dictionary;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const open = project !== null;

  const items: GalleryItem[] = project
    ? [
        ...(project.video ? [{ type: "video" as const, src: project.video }] : []),
        ...(project.gallery?.length
          ? project.gallery
          : [project.image]
        ).map((src) => ({ type: "image" as const, src })),
      ]
    : [];

  const close = useCallback(() => {
    setIndex(0);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight")
        setIndex((i) => (i + 1) % items.length);
      if (event.key === "ArrowLeft")
        setIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, items.length]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <button
            className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-sm"
            onClick={close}
            aria-label={dict.projects.close}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative grid w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl md:max-h-[85vh] md:grid-cols-[1.25fr_1fr] md:overflow-hidden"
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xs tracking-[0.2em] text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black"
              aria-label={dict.projects.close}
            >
              ✕
            </button>

            {/* Media */}
            <div
              className={`relative w-full bg-zinc-900 ${
                project.vertical ? "aspect-[3/4]" : "aspect-[16/10]"
              } md:aspect-auto`}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {items[index].type === "video" ? (
                    <video
                      src={items[index].src}
                      poster={project.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className={`h-full w-full ${
                        project.vertical ? "object-contain" : "object-cover"
                      }`}
                    />
                  ) : (
                    <Image
                      src={items[index].src}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="object-contain"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {items.length > 1 && (
                <>
                  <div className="absolute inset-x-0 top-0 h-1 bg-white/10">
                    <div
                      className="h-full bg-white transition-all duration-300"
                      style={{ width: `${((index + 1) / items.length) * 100}%` }}
                    />
                  </div>

                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black"
                    aria-label="Previous"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black"
                    aria-label="Next"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-[10px] tracking-[0.3em] text-white backdrop-blur-md">
                    {index + 1} / {items.length}
                  </div>
                </>
              )}
            </div>

            {/* Info */}
            <div className="flex max-h-[60vh] flex-col overflow-y-auto p-6 md:max-h-[85vh] md:p-8">
              <p className="text-[10px] tracking-[0.35em] text-zinc-500">
                {project.category}
              </p>
              <div className="mt-2 flex items-start justify-between gap-4">
                <h2 className="text-2xl font-light tracking-[0.1em] text-white md:text-3xl">
                  {project.title}
                </h2>
                <span className="shrink-0 rounded-full border border-white/10 px-4 py-1.5 text-xs tracking-[0.2em] text-zinc-500">
                  {project.year}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 tracking-[0.06em] text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-[0.2em] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {items.length > 1 && (
                <div className="mt-auto flex gap-2 overflow-x-auto pb-2 pt-6">
                  {items.map((item, i) => (
                    <button
                      key={item.type === "video" ? "video" : item.src}
                      onClick={() => setIndex(i)}
                      className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                        i === index
                          ? "border-white/70"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={item.type === "video" ? "Video" : `Image ${i + 1}`}
                    >
                      {item.type === "video" ? (
                        <Image
                          src={project.image}
                          alt="Video"
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src={item.src}
                          alt={`${project.title} ${i + 1}`}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
