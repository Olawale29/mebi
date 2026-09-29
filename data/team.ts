export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  leadership?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Moronkeji Oluwagbotemi",
    role: "Founder, MD/CEO",
    photo: "/team/gb-ceo.jpg",
    leadership: true,
  },
  {
    name: "Akanbi Ayorinde",
    role: "Co-Founder & COO",
    photo: "/team/ayo-coo.jpg",
    leadership: true,
  },
  {
    name: "Bolaji Oluwatobi",
    role: "Chief Financial Officer",
    photo: "/team/tobi-cfo.jpg",
    leadership: true,
  },
  {
    name: "Emele-Ralph Kelechi",
    role: "Marketing Lead",
    photo: "/team/kc-marketing-lead.jpg",
    leadership: true,
  },
  {
    name: "Oyegunle Olawale",
    role: "Technology Lead",
    photo: "/team/wale-tech-lead.jpg",
    leadership: true,
  },
  {
    name: "Abiola",
    role: "Legal Lead",
    photo: "/team/abiola-legal-lead.jpg",
  },
  {
    name: "Joy",
    role: "Product Manager",
    photo: "/team/joy-product-manager.jpg",
  },
  {
    name: "Sunday",
    role: "Product Designer",
    photo: "/team/sunday-product-designer.jpg",
  },
  {
    name: "Dayo",
    role: "Graphics Designer",
    photo: "/team/dayo-graphics-designer.jpg",
  },
  {
    name: "Ire",
    role: "Digital Marketing Officer",
    photo: "/team/ire-digital-marketing-officer.jpg",
  },
  {
    name: "Ife",
    role: "Social Media Manager",
    photo: "/team/ife-social-media-manager.jpg",
  },
];

export const leadership = team.filter((member) => member.leadership);
