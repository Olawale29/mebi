import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { ArticleArt, hasArticleArt } from "@/components/blog/ArticleArt";

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
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-light/30 via-purple-soft/40 to-accent/15">
        {article.image ? (
          <Image
            src={article.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
          />
        ) : hasArticleArt(article.slug) ? (
          <span className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none">
            <ArticleArt slug={article.slug} />
          </span>
        ) : (
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-dark/50">
            {article.category}
          </span>
        )}
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
