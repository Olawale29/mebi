// Pricing sourced from the MEBI Technology Rate Card (2026). All prices are
// starting prices and may increase based on scope — shown as-is on every
// service page via the `note` disclaimer.

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlight?: boolean;
};

export type Service = {
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSub: string;
  startingPrice: string;
  startingPeriod?: string;
  tiers: PricingTier[];
  note?: string;
  cta: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "web-development",
    title: "Websites & Web Development",
    shortDescription: "From starter sites to e-commerce and corporate platforms.",
    heroHeadline: "Websites built to perform.",
    heroSub:
      "From starter sites to e-commerce and corporate platforms — responsive, fast, and built on modern stacks.",
    startingPrice: "₦450,000",
    tiers: [
      {
        name: "Starter Website",
        price: "₦450,000",
        features: ["1–5 pages", "Responsive design", "Contact / WhatsApp integration", "Basic SEO"],
      },
      {
        name: "Business Website",
        price: "₦750,000",
        features: ["5–10 pages", "CMS", "Analytics", "Forms", "Deployment"],
      },
      {
        name: "E-Commerce",
        price: "₦1,000,000",
        features: ["Product catalogue", "Cart / checkout", "Payment integration", "Admin dashboard"],
      },
      {
        name: "Corporate Website",
        price: "₦1,500,000",
        features: ["Custom UI", "Advanced functionality", "CMS", "Integrations", "QA & deployment"],
      },
    ],
    cta: "Start a Website Project",
  },
  {
    number: "02",
    slug: "software-development",
    title: "Software & Application Development",
    shortDescription: "Custom web apps, mobile apps and enterprise solutions.",
    heroHeadline: "Software built around the problem you actually have.",
    heroSub:
      "Custom web applications, mobile apps and enterprise solutions — engineered from the ground up, not adapted from a template.",
    startingPrice: "₦2,000,000",
    tiers: [
      {
        name: "Custom Web Application",
        price: "₦2,000,000",
        features: ["Requirements discovery", "UI/UX", "Development", "Testing", "Deployment"],
      },
      {
        name: "Mobile Application",
        price: "₦2,500,000",
        features: ["Android / iOS or cross-platform", "Backend / API integration", "QA", "Deployment support"],
      },
      {
        name: "Custom Software / Enterprise Solutions",
        price: "Custom quote",
        highlight: true,
        features: ["Pricing depends on scope, integrations, users, security and infrastructure requirements"],
      },
    ],
    cta: "Start a Software Project",
  },
  {
    number: "03",
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    shortDescription: "Research, user flows, wireframes and polished interfaces.",
    heroHeadline: "Design that makes complexity simple.",
    heroSub:
      "Research, information architecture, user flows and interfaces — validated before a line of code is written.",
    startingPrice: "₦100,000",
    tiers: [
      { name: "Landing Page Design", price: "₦100,000", features: ["Single-page design", "Responsive layout"] },
      { name: "Design System", price: "₦350,000", features: ["Component library", "Design tokens", "Documentation"] },
      { name: "Mobile App Design", price: "₦500,000", features: ["Full flow design", "Prototyping"] },
      { name: "Web App / Product Design", price: "₦500,000", features: ["Full flow design", "Prototyping"] },
      {
        name: "Product Design Retainer",
        price: "₦300,000",
        period: "per month",
        features: ["Ongoing design support", "Continuous iteration"],
      },
    ],
    note: "Packages may include research, user flows, wireframes, high-fidelity UI and prototypes.",
    cta: "Start a Design Project",
  },
  {
    number: "04",
    slug: "digital-transformation",
    title: "Business Automation & Digital Transformation",
    shortDescription: "Workflows, CRM, AI tools and practical consulting.",
    heroHeadline: "Less busywork. More work that matters.",
    heroSub:
      "We modernize the manual, error-prone parts of your business with workflows, CRM and AI tools.",
    startingPrice: "₦200,000",
    tiers: [
      { name: "Business Process Automation", price: "₦300,000", features: ["Workflow mapping", "Automation setup"] },
      { name: "CRM / Workflow Implementation", price: "₦250,000", features: ["CRM setup", "Workflow configuration"] },
      { name: "AI & Automation Solutions", price: "₦350,000", features: ["AI-powered tools", "Custom integrations"] },
      { name: "Digital Transformation Consulting", price: "₦200,000", features: ["Process assessment", "Roadmap"] },
      {
        name: "Custom Business Systems",
        price: "Custom quote",
        highlight: true,
        features: ["Scoped to your specific operations"],
      },
    ],
    note: "We assess the existing workflow, identify opportunities and design practical digital solutions.",
    cta: "Explore Automation",
  },
  {
    number: "05",
    slug: "maintenance-support",
    title: "Maintenance & Support Retainers",
    shortDescription: "Monitoring, updates and security so you can stay focused.",
    heroHeadline: "Launched isn't the finish line.",
    heroSub: "Monitoring, updates and security, so your product stays reliable long after launch.",
    startingPrice: "₦50,000",
    startingPeriod: "/ month",
    tiers: [
      {
        name: "Basic",
        price: "₦50,000",
        period: "per month",
        features: ["Website monitoring", "Minor updates", "Basic technical support"],
      },
      {
        name: "Pro",
        price: "₦100,000",
        period: "per month",
        features: ["Priority support", "Updates", "Security checks", "Content / technical changes"],
      },
      {
        name: "Business",
        price: "₦200,000",
        period: "per month",
        features: ["Priority support", "Maintenance", "Monitoring", "Security", "Development hours"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        highlight: true,
        features: ["Dedicated support and SLA-based engagements"],
      },
    ],
    cta: "Talk About a Retainer",
  },
  {
    number: "06",
    slug: "add-ons",
    title: "Additional Services & Add-ons",
    shortDescription: "Hosting, payments, analytics, SEO, training and more.",
    heroHeadline: "The details that make a launch complete.",
    heroSub: "Hosting, payments, analytics, SEO and training — the add-ons that round out a project.",
    startingPrice: "₦25,000",
    tiers: [
      { name: "Domain / Hosting Setup", price: "₦25,000", features: [] },
      { name: "SSL & Security Configuration", price: "₦25,000", features: [] },
      { name: "Payment Gateway Integration", price: "₦50,000", features: [] },
      { name: "Third-Party API Integration", price: "₦75,000", features: [] },
      { name: "Analytics Setup", price: "₦35,000", features: [] },
      { name: "SEO Setup", price: "₦75,000", features: [] },
      { name: "Content Upload / Migration", price: "₦50,000", features: [] },
      { name: "Training & Handover", price: "₦75,000", features: [] },
    ],
    cta: "Add This to My Project",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
