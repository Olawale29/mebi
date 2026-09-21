export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Design" | "Development" | "Technology" | "Business" | "Product";
  author: string;
  date: string; // ISO
  readTime: string;
  featured?: boolean;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "designing-before-building",
    title: "Why We Design Before We Build",
    excerpt:
      "Skipping the design phase feels faster. It rarely is. Here's how a design-first process saves engineering time later.",
    category: "Product",
    author: "MEbi Technologies",
    date: "2026-06-02",
    readTime: "5 min read",
    featured: true,
    content: [
      "Teams under pressure to ship often treat design as a layer applied after the product works — a pass to make things look better once the logic is in place.",
      "That order of operations is expensive. Every interface decision made without a validated flow becomes a piece of technical debt the moment requirements shift, and requirements always shift.",
      "Designing first means the hardest questions — who is this for, what are they trying to do, where does it get complicated — are answered on a whiteboard or in a prototype, not in production code.",
      "It also gives engineering a stable target. A design system and a set of validated flows mean less rework, fewer edge cases discovered late, and a faster build phase overall.",
    ],
  },
  {
    slug: "choosing-a-tech-stack",
    title: "How We Choose a Technology Stack",
    excerpt:
      "The right stack isn't the newest one — it's the one that fits the problem, the team, and the next three years.",
    category: "Technology",
    author: "MEbi Technologies",
    date: "2026-05-14",
    readTime: "6 min read",
    content: [
      "Technology choices are frequently made based on what's popular rather than what fits. That approach optimizes for resume-building, not for the business making the decision.",
      "We evaluate a stack against the actual constraints of the project: expected scale, team size, maintenance model, integration requirements, and time to launch.",
      "A well-chosen boring stack that ships on time and stays maintainable will outperform a fashionable one that nobody on the team can support in eighteen months.",
    ],
  },
  {
    slug: "what-makes-an-interface-trustworthy",
    title: "What Makes an Interface Feel Trustworthy",
    excerpt:
      "Trust in software is built in small, often invisible decisions — load states, error messages, and consistency.",
    category: "Design",
    author: "MEbi Technologies",
    date: "2026-04-22",
    readTime: "4 min read",
    content: [
      "Users rarely articulate why one product feels more trustworthy than another. It's rarely one decision — it's the accumulation of many small ones.",
      "Clear error states that explain what happened and what to do next. Loading states that don't leave people guessing. Consistent spacing, type and color that signal the product was built with care.",
      "None of this is decorative. It's the difference between a product people recommend and one they quietly stop using.",
    ],
  },
  {
    slug: "scaling-without-a-rewrite",
    title: "Scaling a Product Without a Full Rewrite",
    excerpt:
      "Most systems don't need to be rebuilt from scratch — they need an architecture that was designed to grow.",
    category: "Development",
    author: "MEbi Technologies",
    date: "2026-03-10",
    readTime: "7 min read",
    content: [
      "The full rewrite is one of the most expensive decisions a business can make, and it's usually a symptom of architecture that wasn't designed with growth in mind from the start.",
      "Systems that scale well tend to share a few traits: clear separation of concerns, data models that anticipate change, and interfaces between services that don't assume today's scale is permanent.",
      "Investing in that structure early costs more upfront and saves significantly more later.",
    ],
  },
  {
    slug: "product-thinking-for-founders",
    title: "Product Thinking for Non-Technical Founders",
    excerpt:
      "You don't need to write code to make good product decisions — you need a framework for asking the right questions.",
    category: "Business",
    author: "MEbi Technologies",
    date: "2026-02-18",
    readTime: "5 min read",
    content: [
      "The founders who build the most durable products aren't always the most technical — they're the ones who insist on clarity before commitment.",
      "That means defining the problem precisely, understanding who has it, and resisting the urge to build every feature that seems useful.",
      "A good technology partner should be pushing you toward that clarity, not just accepting a feature list at face value.",
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
