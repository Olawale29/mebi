import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { articles, featuredArticle } from "@/data/articles";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Notes on design, development, technology, business and product from the MEBI Technology team.",
  path: "/insights",
});

const rest = articles.filter((a) => a.slug !== featuredArticle.slug);

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        label="Insights"
        title="Notes on design and engineering."
        description="Perspective on how we think about product, design and technology — written for the people making these decisions."
      />

      <section className="pb-16 md:pb-20">
        <Container>
          <Reveal>
            <Link
              href={`/insights/${featuredArticle.slug}`}
              className="group grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-ink/10 lg:grid-cols-2"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-surface-dark-2 lg:aspect-auto">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <SectionLabel>{featuredArticle.category}</SectionLabel>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-primary md:text-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-muted leading-relaxed">{featuredArticle.excerpt}</p>
                <p className="mt-6 text-sm text-muted/70">
                  {featuredArticle.author} · {featuredArticle.readTime}
                </p>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={0.05 * i}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
