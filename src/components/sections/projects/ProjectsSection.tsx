"use client";

import { useState } from "react";
import Grid from "@/components/ui/Grid";
import Glow from "@/components/ui/Glow";
import AmbientLines from "@/components/ui/AmbientLines";
import FeaturedProject from "@/components/sections/projects/FeaturedProject";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import ProjectModal from "@/components/sections/projects/ProjectModal";
import { projects, resolveProject } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

export default function ProjectsSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden px-6 pt-32 pb-24">
      <Grid />
      <Glow />
      <AmbientLines />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="text-center">
          <p className="mb-5 text-xs tracking-[0.45em] text-zinc-500">
            {dict.projects.eyebrow}
          </p>

          <h1 className="text-3xl font-light tracking-[0.12em] md:text-8xl md:tracking-[0.18em]">
            {dict.projects.title}
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 tracking-[0.08em] text-zinc-400 md:text-base">
            {dict.projects.subtitle}
          </p>
        </div>

        {featured && (
          <div className="mt-16 md:mt-24">
            <FeaturedProject
              project={resolveProject(featured, lang)}
              dict={dict}
              onOpen={setActive}
            />
          </div>
        )}

        {rest.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard
                key={project.id}
                project={resolveProject(project, lang)}
                onOpen={setActive}
              />
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        project={active}
        dict={dict}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
