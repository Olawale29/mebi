"use client";

import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const href = service.hasDedicatedPage ? `/services/${service.slug}` : "/services";

  return (
    <Link
      href={href}
      className="group grid grid-cols-1 gap-6 border-t border-ink/10 py-10 transition-colors first:border-t-0 md:grid-cols-[80px_1fr_1fr_60px] md:items-center md:gap-8 md:py-12"
    >
      <span className="text-sm font-medium text-muted">{service.number}</span>

      <h3 className="text-2xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-primary md:text-3xl">
        {service.title}
      </h3>

      <p className="text-muted leading-relaxed">{service.shortDescription}</p>

      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white md:justify-self-end">
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
