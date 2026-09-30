"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";

const filters = ["All", "Web", "Mobile", "UI/UX", "Software"] as const;

export function WorkGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible: Project[] =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter work by category">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
              active === f
                ? "border-primary bg-primary text-white"
                : "border-primary/20 text-muted hover:text-ink"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        {visible.length === 0 && (
          <p className="py-16 text-muted">No projects in this category yet.</p>
        )}
      </motion.div>
    </div>
  );
}
