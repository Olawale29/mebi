// Real, delivered client projects. `isPlaceholder` and `results` stay on the
// type for when a future project needs an illustrative placeholder or has no
// verified outcome data yet, but every current entry is real.

export type Project = {
  slug: string;
  index: string;
  name: string;
  category: "Web" | "Mobile" | "UI/UX" | "Software";
  industry: string;
  description: string;
  services: string[];
  technology: string[];
  timeline: string;
  challenge: string;
  approach: string[];
  isPlaceholder: boolean;
  results: string[] | null;
  /** Real screenshot used as the cover instead of the illustrative SVG mock. */
  image?: string;
  /** Live site this project shipped to, linked from the card and case study. */
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "oleif-careers",
    index: "01",
    name: "Oleif Careers",
    category: "Web",
    industry: "Education & Career Development",
    description:
      "A career-prep education platform helping learners build practical skills and apply for roles, through live instructor-led cohorts and one-on-one guidance.",
    services: ["Websites & Web Development", "UI/UX & Product Design"],
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    timeline: "Delivered — live in production",
    challenge:
      "A career-prep education provider needed a marketing and application site that could present several programmes, a defined teaching method, and a full team — all while keeping prospective learners moving toward a single goal: applying.",
    approach: [
      "Built a multi-page marketing site spanning programmes, method, team, reviews and FAQs",
      "Structured each programme page so prospective learners can compare options at a glance",
      "Kept 'Apply Now' and 'Explore Programmes' as the two consistent actions across every page",
    ],
    isPlaceholder: false,
    results: null,
    image: "/work/oleif-careers.jpg",
    url: "https://oleifcareers.com/",
  },
  {
    slug: "chareliz-construction",
    index: "02",
    name: "CharEliz",
    category: "Web",
    industry: "Construction",
    description:
      "A general contracting company website showcasing multi-market construction, roofing and property maintenance services for commercial and institutional clients.",
    services: ["Websites & Web Development", "UI/UX & Product Design"],
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    timeline: "Delivered — live in production",
    challenge:
      "A general contracting firm operating across several cities needed a site that could establish credibility with corporate and institutional clients, not just list services.",
    approach: [
      "Structured the site around the firm's core capabilities — site clearing, roofing, roads, and property maintenance",
      "Surfaced the firm's multi-market footprint across Lagos, Abuja and international locations to build client confidence",
      "Kept 'Discuss a Project' as a consistent, low-friction next step on every page",
    ],
    isPlaceholder: false,
    results: null,
    image: "/work/char-eliz.jpg",
    url: "https://char-eliz.vercel.app/",
  },
  {
    slug: "seeitsayit-podcast",
    index: "03",
    name: "SEEITSAYIT",
    category: "Web",
    industry: "Media & Entertainment",
    description:
      "A storytelling podcast platform built around real people and real stories, with episode discovery, topics and a community wall.",
    services: ["Websites & Web Development", "UI/UX & Product Design"],
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    timeline: "Delivered — live in production",
    challenge:
      "A storytelling podcast needed a site that worked as both a discovery hub for episodes and topics, and a brand destination — not just a list of audio files.",
    approach: [
      "Built episode and topic browsing around how listeners actually discover podcasts",
      "Added a 'Wall' and 'Book' section so the site works as a brand destination, not just an episode feed",
      "Designed the homepage around a single clear action — Listen Now — backed by brand storytelling",
    ],
    isPlaceholder: false,
    results: null,
    image: "/work/see-it-say-it.jpg",
    url: "https://see-it-say-it-kappa.vercel.app/",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
