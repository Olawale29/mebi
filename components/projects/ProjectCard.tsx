"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-t border-ink/10 py-10 first:border-t-0 md:py-12"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <div className="flex items-center gap-6 md:w-1/3">
          <span className="text-sm font-medium text-muted">{project.index}</span>
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-primary md:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.industry}</p>
          </div>
        </div>

        <div className="overflow-hidden md:w-1/3">
          <p className="text-muted leading-relaxed">{project.description}</p>
        </div>

        <div className="flex items-center justify-between gap-6 md:w-1/3 md:justify-end">
          <div className="flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink/10 px-3 py-1 text-xs text-muted"
              >
                {s}
              </span>
            ))}
          </div>
          <motion.span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
            aria-hidden
          >
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </motion.span>
        </div>
      </div>

      <div className="mt-6 h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary-light/40 via-purple-soft/50 to-accent/20 md:h-80">
        <div className="flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectGlyph category={project.category} />
        </div>
      </div>
    </Link>
  );
}

function ProjectGlyph({ category }: { category: Project["category"] }) {
  return (
    <div className="flex flex-col items-center gap-3 text-primary-dark/70">
      <span className="text-xs font-semibold uppercase tracking-[0.2em]">{category}</span>
      <div className="flex gap-2">
        <span className="h-2 w-2 rounded-full bg-primary/40" />
        <span className="h-2 w-2 rounded-full bg-accent/60" />
        <span className="h-2 w-2 rounded-full bg-primary/40" />
      </div>
    </div>
  );
}
