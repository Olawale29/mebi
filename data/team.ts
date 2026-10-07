// Official roster per the MEBI Technology Company Profile (2026) "Leadership" slide.
// Two members (Adeyemi Dennis, Aniviye Iyanuoluwa) don't have a photo yet —
// they render with initials until one is provided.

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Moronkeji Oluwagbotemi",
    role: "Founder / CEO",
    photo: "/team/gb-ceo.jpg",
  },
  {
    name: "Akanbi Ayorinde",
    role: "Co-Founder / COO",
    photo: "/team/ayo-coo.jpg",
  },
  {
    name: "Bolaji Oluwatobi",
    role: "CFO",
    photo: "/team/tobi-cfo.jpg",
  },
  {
    name: "Ayoola Abiola",
    role: "Legal Lead",
    photo: "/team/abiola-legal-lead.jpg",
  },
  {
    name: "Emele-Ralph Kelechi",
    role: "Marketing Lead",
    photo: "/team/kc-marketing-lead.jpg",
  },
  {
    name: "Oyegunle Olawale",
    role: "Technology Lead",
    photo: "/team/wale-tech-lead.jpg",
  },
  {
    name: "Adeyemi Dennis",
    role: "Product Design Lead",
  },
  {
    name: "Aniviye Iyanuoluwa",
    role: "HR & Admin Manager",
  },
];

export const leadership = team;
