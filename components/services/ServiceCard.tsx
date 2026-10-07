"use client";

import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group grid grid-cols-1 gap-6 border-t border-ink/10 py-10 transition-colors first:border-t-0 md:grid-cols-[80px_1.2fr_1fr_auto] md:items-center md:gap-8 md:py-12"
    >
      <span className="text-sm font-medium text-muted">{service.number}</span>

      <div>
        <h3 className="text-2xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-primary md:text-3xl">
          {service.title}
        </h3>
        <p className="mt-2 text-muted leading-relaxed">{service.shortDescription}</p>
      </div>

      <div className="text-sm text-muted">
        <span className="block text-xs uppercase tracking-[0.1em] text-muted/70">Starting from</span>
        <span className="text-lg font-semibold text-primary">
          {service.startingPrice}
          {service.startingPeriod && <span className="text-sm font-normal text-muted">{service.startingPeriod}</span>}
        </span>
      </div>

      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-ink transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white md:justify-self-end">
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
