// Official roster per the MEBI Technology Company Profile (2026) "Leadership"
// slide, plus the wider staff roster added later. Bios are placeholders until
// real copy is provided per person.

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  /**
   * Photos are cut-outs framed differently, so each gets a scale and a
   * vertical shift (% of card height) that lines the heads up at one size.
   */
  frame?: { scale: number; y: number };
};

const PLACEHOLDER_BIO =
  "Bio coming soon — check back shortly for more on their background and role at MEBI.";

export const leadership: TeamMember[] = [
  {
    slug: "moronkeji-oluwagbotemi",
    name: "Moronkeji Oluwagbotemi",
    role: "Founder / CEO",
    photo: "/team/gb-ceo.jpg",
    frame: { scale: 0.85, y: 1.8 },
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "akanbi-ayorinde",
    name: "Akanbi Ayorinde",
    role: "Co-Founder / COO",
    photo: "/team/ayo-coo-color.png",
    frame: { scale: 1.58, y: -28.1 },
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "bolaji-oluwatobi",
    name: "Bolaji Oluwatobi",
    role: "CFO",
    photo: "/team/tobi-cfo.jpg",
    frame: { scale: 0.99, y: 0.6 },
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "ayoola-abiola",
    name: "Ayoola Abiola",
    role: "Legal Lead",
    photo: "/team/abiola-legal-lead-color.png",
    frame: { scale: 1.27, y: -21.5 },
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "emele-ralph-kelechi",
    name: "Emele-Ralph Kelechi",
    role: "Marketing Lead",
    photo: "/team/kc-marketing-lead-color.jpg",
    frame: { scale: 1.19, y: -20.4 },
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "oyegunle-olawale",
    name: "Oyegunle Olawale",
    role: "Technology Lead",
    photo: "/team/wale-tech-lead.jpg",
    frame: { scale: 0.89, y: 1.7 },
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "adeyemi-dennis",
    name: "Adeyemi Dennis",
    role: "Product Design Lead",
    photo: "/team/dennis-product-design-lead.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "aniviye-iyanuoluwa",
    name: "Aniviye Iyanuoluwa",
    role: "HR & Admin Manager",
    photo: "/team/iyanu-hr-admin.png",
    bio: PLACEHOLDER_BIO,
  },
];

export const staff: TeamMember[] = [
  {
    slug: "anjola",
    name: "Anjola",
    role: "Product Designer",
    photo: "/team/anjola-product-designer.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "dayo",
    name: "Dayo",
    role: "Graphics Designer",
    photo: "/team/dayo-graphics-designer.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "gbenga",
    name: "Gbenga",
    role: "Developer",
    photo: "/team/gbenga-developer.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "ife",
    name: "Ife",
    role: "Social Media Manager",
    photo: "/team/ife-social-media-manager.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "ire",
    name: "Ire",
    role: "Digital Marketing Officer",
    photo: "/team/ire-digital-marketing-officer.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "joy",
    name: "Joy",
    role: "Product Manager",
    photo: "/team/joy-product-manager.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "praise",
    name: "Praise",
    role: "Developer",
    photo: "/team/praise-developer.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "semilore",
    name: "Semilore",
    role: "Admin Officer",
    photo: "/team/semilore-admin-officer.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "sunday",
    name: "Sunday",
    role: "Product Designer",
    photo: "/team/sunday-product-designer.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "tiana",
    name: "Tiana",
    role: "Product Designer",
    photo: "/team/tiana-product-designer.png",
    bio: PLACEHOLDER_BIO,
  },
  {
    slug: "tomisin",
    name: "Tomisin",
    role: "Cybersecurity Specialist",
    photo: "/team/tomisin-cybersecurity.png",
    bio: PLACEHOLDER_BIO,
  },
];

export const team: TeamMember[] = [...leadership, ...staff];

export function getTeamMemberBySlug(slug: string) {
  return team.find((member) => member.slug === slug);
}
