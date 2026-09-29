export type Service = {
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroHeadline: string;
  heroSub: string;
  includes: string[];
  builtWith?: string[];
  cta: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "software-development",
    title: "Software & Solution Development",
    shortDescription:
      "Custom web, mobile, enterprise, and cloud-based solutions engineered to solve the specific problem you actually have — not a generic template.",
    description:
      "Custom web, mobile, enterprise, and cloud-based solutions built to solve complex business challenges — not adapted from a template.",
    heroHeadline: "Software built around the problem you actually have.",
    heroSub:
      "Custom web, mobile, enterprise, and cloud-based solutions — engineered from the ground up, not adapted from a template.",
    includes: [
      "Custom web & mobile application development",
      "Enterprise software systems",
      "Cloud-native application architecture",
      "API design & systems integration",
    ],
    builtWith: ["Python", "Java", "JavaScript", "React", "Flutter", "Node.js", ".NET", "C#"],
    cta: "Start a Software Project",
  },
  {
    number: "02",
    slug: "it-consulting",
    title: "IT Consulting & Capacity Building",
    shortDescription:
      "Strategic technology consulting, managed IT services, and hands-on training that help your team get more out of every tool you already own.",
    description:
      "Strategic technology consulting, managed IT services, and professional training that maximize the value of your existing digital investments.",
    heroHeadline: "Get more out of the technology you already own.",
    heroSub:
      "Strategic consulting, managed IT services, and hands-on training built around your team, not a generic playbook.",
    includes: [
      "Technology strategy & roadmapping",
      "Managed IT services",
      "Staff training & capacity building",
      "IT infrastructure audits",
    ],
    cta: "Book a Consulting Call",
  },
  {
    number: "03",
    slug: "digital-transformation",
    title: "Digital Transformation & Automation",
    shortDescription:
      "We modernize the manual, error-prone parts of your business with AI, workflow automation, and systems integration — so your team spends less time on busywork.",
    description:
      "Modernizing business processes through AI, workflow automation, and systems integration to improve efficiency and cut manual work.",
    heroHeadline: "Less busywork. More work that matters.",
    heroSub:
      "We modernize the manual, error-prone parts of your business with AI, automation, and systems integration.",
    includes: [
      "Process automation & workflow redesign",
      "AI-powered tools & integrations",
      "Legacy system modernization",
      "Systems integration across your tech stack",
    ],
    cta: "Explore Automation",
  },
  {
    number: "04",
    slug: "data-cloud-security",
    title: "Data, Cloud & Cybersecurity",
    shortDescription:
      "Cloud architecture, business intelligence, and security built in from the start — not bolted on after something goes wrong.",
    description:
      "Cloud technologies, business intelligence, and cybersecurity that build secure, scalable, data-driven operations.",
    heroHeadline: "Security built in from the start.",
    heroSub:
      "Cloud architecture, business intelligence, and cybersecurity — designed in from day one, not bolted on afterward.",
    includes: [
      "Cloud migration & infrastructure (Azure, AWS, Google Cloud)",
      "Business intelligence & dashboards (Power BI, Tableau)",
      "Database design & management",
      "Cybersecurity assessments & hardening",
    ],
    builtWith: [
      "Microsoft Azure",
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Power BI",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Tableau",
      "Microsoft Defender",
    ],
    cta: "Talk to Our Cloud & Security Team",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
