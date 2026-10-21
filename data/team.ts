// Official roster per the MEBI Technology Company Profile (2026) "Leadership" slide.
// Two members (Adeyemi Dennis, Aniviye Iyanuoluwa) don't have a photo yet —
// they render with initials until one is provided.

export type TeamMember = {
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

export const team: TeamMember[] = [
  {
    name: "Moronkeji Oluwagbotemi",
    role: "Founder / CEO",
    photo: "/team/gb-ceo.jpg",
    frame: { scale: 0.85, y: 1.8 },
  },
  {
    name: "Akanbi Ayorinde",
    role: "Co-Founder / COO",
    photo: "/team/ayo-coo-color.png",
    frame: { scale: 1.58, y: -28.1 },
  },
  {
    name: "Bolaji Oluwatobi",
    role: "CFO",
    photo: "/team/tobi-cfo.jpg",
    frame: { scale: 0.99, y: 0.6 },
  },
  {
    name: "Ayoola Abiola",
    role: "Legal Lead",
    photo: "/team/abiola-legal-lead-color.png",
    frame: { scale: 1.27, y: -21.5 },
  },
  {
    name: "Emele-Ralph Kelechi",
    role: "Marketing Lead",
    photo: "/team/kc-marketing-lead-color.jpg",
    frame: { scale: 1.19, y: -20.4 },
  },
  {
    name: "Oyegunle Olawale",
    role: "Technology Lead",
    photo: "/team/wale-tech-lead.jpg",
    frame: { scale: 0.89, y: 1.7 },
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
