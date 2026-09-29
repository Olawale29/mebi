// Placeholder project/case-study data. `isPlaceholder: true` marks entries
// that are illustrative only — swap in real project data as it becomes
// available and flip the flag to false so result metrics etc. can render.

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
};

export const projects: Project[] = [
  {
    slug: "fintech-platform",
    index: "01",
    name: "Fintech Platform",
    category: "Web",
    industry: "Financial Services",
    description:
      "A digital banking dashboard concept designed for clarity under high-frequency, high-stakes use.",
    services: ["Software & Solution Development"],
    technology: ["Next.js", "TypeScript", "PostgreSQL"],
    timeline: "Illustrative — 10 weeks",
    challenge:
      "Financial dashboards tend to bury the numbers that matter under dense, undifferentiated data. The brief called for an interface that surfaces what needs attention first.",
    approach: [
      "Mapped the highest-frequency user tasks and re-ordered the information hierarchy around them",
      "Designed a modular dashboard system that scales from a single account to a full portfolio view",
      "Built a component library so new financial products can ship without new design work",
    ],
    isPlaceholder: true,
    results: null,
  },
  {
    slug: "logistics-platform",
    index: "02",
    name: "Logistics Platform",
    category: "Software",
    industry: "Logistics & Supply Chain",
    description:
      "An internal operations platform concept for coordinating fleet, inventory and delivery workflows in one place.",
    services: ["Software & Solution Development", "Digital Transformation & Automation"],
    technology: ["React", "Node.js", "MySQL"],
    timeline: "Illustrative — 14 weeks",
    challenge:
      "Operations teams were coordinating fleet and inventory across disconnected spreadsheets and tools, with no single source of truth.",
    approach: [
      "Modelled the end-to-end operational workflow before any interface was designed",
      "Consolidated fleet, inventory and delivery status into one real-time system",
      "Designed role-based views so dispatchers, drivers and managers each see only what they need",
    ],
    isPlaceholder: true,
    results: null,
  },
  {
    slug: "healthcare-product",
    index: "03",
    name: "Healthcare Product",
    category: "Mobile",
    industry: "Healthcare",
    description:
      "A patient-facing mobile app concept for scheduling care and reviewing records without friction.",
    services: ["Software & Solution Development"],
    technology: ["React Native", "Node.js"],
    timeline: "Illustrative — 12 weeks",
    challenge:
      "Patients were dropping off during appointment booking flows that assumed familiarity with clinical terminology.",
    approach: [
      "Rebuilt the booking flow in plain language, validated through usability testing",
      "Designed an accessible interface that meets contrast and legibility standards for all ages",
      "Integrated secure authentication for handling sensitive health records",
    ],
    isPlaceholder: true,
    results: null,
  },
  {
    slug: "ecommerce-experience",
    index: "04",
    name: "E-commerce Experience",
    category: "Web",
    industry: "Retail & E-commerce",
    description:
      "A storefront and checkout experience concept designed to reduce friction between browsing and purchase.",
    services: ["Software & Solution Development"],
    technology: ["Next.js", "Node.js", "PostgreSQL"],
    timeline: "Illustrative — 8 weeks",
    challenge:
      "A multi-step checkout was causing cart abandonment on mobile devices in particular.",
    approach: [
      "Simplified checkout into a single, progressively disclosed flow",
      "Rebuilt the product catalogue for sub-second load times",
      "Designed a mobile-first interface tested across real device sizes",
    ],
    isPlaceholder: true,
    results: null,
  },
  {
    slug: "business-management-platform",
    index: "05",
    name: "Business Management Platform",
    category: "Software",
    industry: "Professional Services",
    description:
      "A CRM and workflow automation concept for service businesses managing clients, projects and invoicing.",
    services: ["Software & Solution Development", "IT Consulting"],
    technology: ["React", "Laravel", "MySQL"],
    timeline: "Illustrative — 16 weeks",
    challenge:
      "The business was running client management, project tracking and invoicing across three unconnected tools.",
    approach: [
      "Designed a unified data model connecting clients, projects and billing",
      "Automated recurring workflows that were previously manual",
      "Built a dashboard giving leadership a real-time view of business health",
    ],
    isPlaceholder: true,
    results: null,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
