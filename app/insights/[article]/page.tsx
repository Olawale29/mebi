import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { articles, getArticleBySlug } from "@/data/articles";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return articles.map((a) => ({ article: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}): Promise<Metadata> {
  const { article: slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article)
    return buildMetadata({
      title: "Article Not Found",
      description: "This article could not be found.",
      path: "/insights",
    });

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article: slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Organization", name: article.author },
    datePublished: article.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="pt-40 pb-24 md:pt-48 md:pb-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <SectionLabel>{article.category}</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px]">
                {article.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-sm text-muted">
                {article.author} · {formatDate(article.date)} · {article.readTime}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex aspect-[16/9] items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light/30 via-purple-soft/40 to-accent/15">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-dark/50">
                  {article.category}
                </span>
              </div>
            </Reveal>

            <div className="prose-content mt-12 space-y-6">
              {article.content.map((paragraph, i) => (
                <Reveal key={i} delay={0.03 * i}>
                  <p className="text-lg leading-relaxed text-ink/80">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </article>

      <CTASection />
    </>
  );
}
