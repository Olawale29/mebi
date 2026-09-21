export type Service = {
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroHeadline: string;
  heroSub: string;
  capabilities: string[];
  whatWeSolve: string[];
  deliverables: string[];
  typicalEngagement: string;
  cta: string;
  hasDedicatedPage: boolean;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Research-led design that turns complex products into interfaces people navigate without thinking twice.",
    description:
      "We design the experience before a single line of code is written — mapping how people move through a product and how every screen should look, feel and respond.",
    heroHeadline: "Design that makes complexity simple.",
    heroSub:
      "We research, structure and design digital products so that complexity disappears into an interface people already know how to use.",
    capabilities: [
      "User research",
      "Information architecture",
      "User flows",
      "Wireframing",
      "UI design",
      "Design systems",
      "Prototyping",
      "Usability testing",
    ],
    whatWeSolve: [
      "Products that work but confuse the people using them",
      "Inconsistent interfaces across a growing product",
      "No design system to keep engineering and design aligned",
      "Low conversion or high drop-off in key user flows",
    ],
    deliverables: [
      "User research summary",
      "Information architecture & flows",
      "Wireframes and prototypes",
      "UI design files",
      "A documented design system",
    ],
    typicalEngagement: "4–10 weeks, depending on product scope",
    cta: "Start a Design Project",
    hasDedicatedPage: true,
  },
  {
    number: "02",
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Websites and web applications engineered for speed, structure and long-term maintainability.",
    description:
      "From marketing sites to full SaaS platforms, we build web products on modern, well-documented foundations that your team can keep building on.",
    heroHeadline: "Web experiences built to perform.",
    heroSub:
      "We design and engineer websites and web applications that load fast, scale cleanly and hold up under real business use.",
    capabilities: [
      "Corporate & marketing websites",
      "Web applications",
      "SaaS platforms",
      "E-commerce",
      "Customer portals",
      "Internal business tools",
      "Third-party integrations",
      "Performance optimization",
    ],
    whatWeSolve: [
      "A website that doesn't reflect the quality of the business behind it",
      "Slow, hard-to-maintain platforms built on outdated stacks",
      "Manual processes that should be internal tools",
      "Systems that don't talk to each other",
    ],
    deliverables: [
      "Technical architecture & strategy",
      "Production-ready frontend and backend",
      "QA and cross-device testing",
      "Deployment and monitoring setup",
    ],
    typicalEngagement: "6–16 weeks, depending on complexity",
    cta: "Build With MEbi",
    hasDedicatedPage: true,
  },
  {
    number: "03",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile products, engineered from first interaction to App Store launch.",
    description:
      "We design and build mobile applications that feel native, perform reliably and are engineered to be maintained long after launch.",
    heroHeadline: "Products that live in your users' hands.",
    heroSub:
      "From first interaction to App Store launch, we build mobile products around the people who use them.",
    capabilities: [
      "iOS development",
      "Android development",
      "Cross-platform development",
      "API integration",
      "Authentication",
      "Payments",
      "Push notifications",
      "App analytics",
      "App Store & Play Store deployment",
    ],
    whatWeSolve: [
      "An idea that needs to become a functioning mobile product",
      "A web product that now needs a native mobile presence",
      "Fragmented experiences across iOS and Android",
      "Apps that work but feel unfinished",
    ],
    deliverables: [
      "Mobile UI/UX design",
      "Native or cross-platform application build",
      "API and backend integration",
      "Store submission and release management",
    ],
    typicalEngagement: "8–20 weeks, depending on platform scope",
    cta: "Build My App",
    hasDedicatedPage: true,
  },
  {
    number: "04",
    slug: "custom-software",
    title: "Custom Software",
    shortDescription:
      "Business systems — CRMs, ERPs, dashboards and internal tools — built around how your business actually runs.",
    description:
      "When off-the-shelf software no longer fits, we design and engineer systems shaped around your specific workflows, data and scale requirements.",
    heroHeadline: "Software built around your business.",
    heroSub:
      "We design and engineer custom systems — from internal tools to full platforms — around the way your business actually operates.",
    capabilities: [
      "CRM systems",
      "ERP systems",
      "Inventory management",
      "Booking platforms",
      "Marketplaces",
      "Business dashboards",
      "Workflow automation",
      "Internal tooling",
    ],
    whatWeSolve: [
      "Generic software that doesn't fit how the business operates",
      "Manual, spreadsheet-driven processes at growing scale",
      "Disconnected tools that should be a single system",
      "Legacy software that can no longer be safely extended",
    ],
    deliverables: [
      "System architecture and data modelling",
      "Custom application build",
      "Security and access control implementation",
      "Documentation and handover",
    ],
    typicalEngagement: "8–24 weeks, depending on system scope",
    cta: "Discuss My Product",
    hasDedicatedPage: true,
  },
  {
    number: "05",
    slug: "product-strategy",
    title: "Product Strategy",
    shortDescription:
      "Clarifying what to build, for whom, and why — before any design or engineering effort begins.",
    description:
      "We help teams turn an ambiguous idea or business problem into a clear, sequenced product plan that design and engineering can execute against.",
    heroHeadline: "Clarity before code.",
    heroSub:
      "We help ambitious businesses turn an idea or problem into a clear, sequenced product plan.",
    capabilities: [
      "Discovery workshops",
      "Market & competitive review",
      "Product roadmapping",
      "Feature prioritization",
      "Technical feasibility review",
    ],
    whatWeSolve: [
      "An idea that hasn't been shaped into a buildable product",
      "Uncertainty about what to build first",
      "Misalignment between business goals and product direction",
    ],
    deliverables: [
      "Product strategy document",
      "Prioritized roadmap",
      "Scoped requirements for design and engineering",
    ],
    typicalEngagement: "2–4 weeks",
    cta: "Talk Strategy",
    hasDedicatedPage: false,
  },
  {
    number: "06",
    slug: "technology-consulting",
    title: "Technology Consulting",
    shortDescription:
      "Independent technical guidance on architecture, stack decisions and engineering practices.",
    description:
      "We advise businesses and technical teams on the decisions that shape a product's long-term cost, performance and maintainability.",
    heroHeadline: "Technology built around your business.",
    heroSub:
      "Independent, practical guidance on the technical decisions that shape your product's future.",
    capabilities: [
      "Architecture review",
      "Technology stack selection",
      "Engineering process audit",
      "Scalability planning",
      "Security review",
    ],
    whatWeSolve: [
      "Uncertainty about whether current systems can scale",
      "Technical debt slowing the team down",
      "No in-house technical leadership for a critical decision",
    ],
    deliverables: [
      "Technical audit and findings",
      "Recommendations report",
      "Ongoing advisory (optional)",
    ],
    typicalEngagement: "Project-based or ongoing retainer",
    cta: "Talk to MEbi",
    hasDedicatedPage: false,
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
