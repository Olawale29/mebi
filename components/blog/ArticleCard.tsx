import Link from "next/link";
import type { Article } from "@/data/articles";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/insights/${article.slug}`} className="group block">
      <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-light/30 via-purple-soft/40 to-accent/15">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-dark/50">
          {article.category}
        </span>
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="font-semibold uppercase tracking-[0.1em] text-primary">
            {article.category}
          </span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-primary">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
          {article.excerpt}
        </p>
        <p className="mt-3 text-xs text-muted/70">{formatDate(article.date)}</p>
      </div>
    </Link>
  );
}
