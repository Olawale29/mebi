"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCover } from "@/components/projects/ProjectCover";

export function ProjectCard({ project }: { project: Project }) {
  const href = `/work/${project.slug}`;

  return (
    <div className="group border-t border-ink/10 py-10 first:border-t-0 md:py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <Link href={href} className="flex items-center gap-6 md:w-1/3">
          <span className="text-sm font-medium text-muted">{project.index}</span>
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-primary md:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.industry}</p>
          </div>
        </Link>

        <Link href={href} className="overflow-hidden md:w-1/3">
          <p className="text-muted leading-relaxed">{project.description}</p>
        </Link>

        <div className="flex items-center justify-between gap-6 md:w-1/3 md:justify-end">
          <div className="flex flex-wrap items-center gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-primary/15 px-3 py-1 text-xs text-muted"
              >
                {s}
              </span>
            ))}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary hover:border-primary hover:bg-primary hover:text-white"
              >
                Visit live site ↗
              </a>
            )}
          </div>
          <Link
            href={href}
            aria-label={`View ${project.name} case study`}
            className="block"
          >
            <motion.span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 text-ink transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
              aria-hidden
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </motion.span>
          </Link>
        </div>
      </div>

      <Link href={href} className="mt-6 block h-64 w-full overflow-hidden rounded-2xl md:h-80">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectCover slug={project.slug} image={project.image} />
        </div>
      </Link>
    </div>
  );
}
