// Official roster per the MEBI Technology Company Profile (2026) "Leadership"
// slide, plus the wider staff roster added later. Bios are sourced from the
// MEBI Technology Website Team Profiles document; a few staff members
// (Anjola, Tiana, Tomisin) don't have one yet and keep the placeholder.

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
    bio: "Moronkeji Oluwagbotemi is the Founder of Mebi Technology and a Master of Science holder in Software Engineering from Lead City University, having also earned a Bachelor of Science in Computer Science from McPherson University. He has professional experience spanning project management, IT infrastructure support, and digital marketing from organizations such as the International Institute of Tropical Agriculture (IITA) and Lead City University. He specializes in technical troubleshooting, system administration, problem-solving, and cross-functional team leadership, with a strong focus on delivering cutting-edge software solutions. He is passionate about driving target-oriented initiatives, building reliable IT environments, and leveraging technology to solve business problems.",
  },
  {
    slug: "akanbi-ayorinde",
    name: "Akanbi Ayorinde",
    role: "Co-Founder / COO",
    photo: "/team/ayo-coo-color.png",
    frame: { scale: 1.58, y: -28.1 },
    bio: "Akanbi Ayorinde is a Co-Founder and COO at Mebi Technology and a graduate of Landmark University with experience in leading multi-region initiatives, driving business growth, and managing strategic partnerships across Sub-Saharan Africa. He specializes in programme management, budgeting, operational efficiency, stakeholder engagement, and CRM systems, with strengths in process optimization and cross-functional team leadership. He is passionate about scaling digital programs, business growth, and data-driven decision-making.",
  },
  {
    slug: "bolaji-oluwatobi",
    name: "Bolaji Oluwatobi",
    role: "CFO",
    photo: "/team/tobi-cfo.jpg",
    frame: { scale: 0.99, y: 0.6 },
    bio: "Bolaji Oluwatobi is the Chief Financial Officer at MEBI Technology with extensive experience in client relationship management, revenue optimization, and risk mitigation. She specializes in financial planning, cash flow management, budgeting, and cost optimization, with core strengths in financial reporting, resource allocation, and strategic business decision-making. She is passionate about aligning financial objectives with corporate vision, fostering financial sustainability, and implementing sound financial practices that drive organizational growth and transparency.",
  },
  {
    slug: "ayoola-abiola",
    name: "Ayoola Abiola",
    role: "Legal Lead",
    photo: "/team/abiola-legal-lead-color.png",
    frame: { scale: 1.27, y: -21.5 },
    bio: "Ayoola Abiola is the Secretary & Legal Lead at Mebi Technology with experience handling legal and administrative matters, drafting business agreements, and supporting corporate governance. She specializes in reviewing contracts such as Statements of Work (SOWs) and Service Level Agreements (SLAs), managing company records, and conducting legal research to ensure operational compliance. She is detail-oriented, analytical, and committed to supporting sound decision-making through structured documentation, corporate secretarial support, and effective contract management.",
  },
  {
    slug: "emele-ralph-kelechi",
    name: "Emele-Ralph Kelechi",
    role: "Marketing Lead",
    photo: "/team/kc-marketing-lead-color.jpg",
    frame: { scale: 1.19, y: -20.4 },
    bio: "Emele-Ralph Kelechi is the Marketing Lead at Mebi Technology with experience owning brand strategy, integrated marketing plans, and cross-functional communications. She specializes in translating business objectives into structured content systems and high-growth digital campaigns, with strengths in social media management, brand positioning, and creative direction. She is passionate about connecting people with brands through creative execution, clear editorial calendars, and data-driven storytelling.",
  },
  {
    slug: "oyegunle-olawale",
    name: "Oyegunle Olawale",
    role: "Technology Lead",
    photo: "/team/wale-tech-lead.jpg",
    frame: { scale: 0.89, y: 1.7 },
    bio: "Oyegunle Olawale is the Technology Lead and Senior Software Engineer at MEBI Technology LTD with extensive experience building mobile apps, web platforms, and backend systems for fintech, logistics, e-commerce, and high-stakes regulated platforms like African central bank forex systems. He specializes in translating complex technical requirements into scalable architectures, robust APIs, and cross-platform mobile solutions, with strengths in backend engineering, cloud infrastructure, team leadership, and client scoping. He is passionate about engineering reliable products through clean code architecture, cross-functional collaboration, and robust deployment pipelines.",
  },
  {
    slug: "adeyemi-dennis",
    name: "Adeyinka Dennis",
    role: "Product Design Lead",
    photo: "/team/dennis-product-design-lead.png",
    bio: "Adeyinka Dennis is the Lead Product Designer at Mebi Technology with experience owning the complete design process from product requirements and planning to QA and developer handoff. He specializes in turning business goals and user needs into intuitive interfaces, with strengths in user experience, problem-solving, and practical design contexts. He is passionate about creating simple, purposeful digital products that remove unnecessary user decisions.",
  },
  {
    slug: "aniviye-iyanuoluwa",
    name: "Aniviye Iyanuoluwa",
    role: "HR & Admin Manager",
    photo: "/team/iyanu-hr-admin.png",
    bio: "Aniviye Iyanuoluwa is an administrative and finance support professional and a graduate of the University of Ibadan with experience in office coordination, invoicing, records management, and human resources support. She specializes in streamlining daily operations, staff onboarding, documentation, and client relations, with strengths in communication and administrative efficiency. She is passionate about supporting operational excellence and fostering organized, productive work environments.",
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
    bio: "Odubona Temidayo is a creative professional with experience in graphic design, branding, photography, and videography. Through his work in digital media and clothing brands, he combines visual creativity with practical branding skills to develop engaging content and distinctive brand identities. He also holds a Higher National Diploma in Public Administration and is an Associate Chartered Public Administrator.",
  },
  {
    slug: "gbenga",
    name: "Gbenga",
    role: "Developer",
    photo: "/team/gbenga-developer.png",
    bio: "Timi Gbenga is a Frontend Developer with over three years of experience building and deploying web and mobile applications. He works with React, Next.js, TypeScript, and React Native to create responsive, engaging digital experiences. His work includes developing myQuest, a CBT preparation app with over 1,000 downloads, alongside projects spanning education, e-commerce, and real estate.",
  },
  {
    slug: "ife",
    name: "Ife",
    role: "Social Media Manager",
    photo: "/team/ife-social-media-manager.png",
    bio: "Banjo Ifeoluwa is a Social Media Manager at MEBI Technology with experience in social media content planning, content development, and brand communication. She specializes in organizing content calendars, writing audience-focused captions, and aligning social media initiatives with business objectives. A History and International Studies student at the University of Lagos and a graduate of the Hajime Digital Marketing programme, she is passionate about creative execution, strengthening brand visibility, and driving meaningful digital growth.",
  },
  {
    slug: "ire",
    name: "Ire",
    role: "Digital Marketing Officer",
    photo: "/team/ire-digital-marketing-officer.png",
    bio: "Omotosho Ireoluwa is a Digital Marketing Officer at MEBI Technology and a Mass Communication undergraduate at the University of Lagos with experience in social media management, brand positioning, audience engagement, and strategic communications. She specializes in campaign planning, SEO fundamentals, paid advertising, content strategy, and customer relationship management, with strengths in media team coordination and market research. She is passionate about developing effective digital strategies, building meaningful audience relationships, and helping brands connect with their target markets.",
  },
  {
    slug: "joy",
    name: "Joy",
    role: "Product Manager",
    photo: "/team/joy-product-manager.png",
    bio: "Peter Joy is an aspiring Product Management professional with a background in UI/UX design, quality control, and research. She brings experience in understanding user needs, developing product roadmaps, prioritizing features, and collaborating with cross-functional teams. Her combined design and analytical skills support the development of practical, user-centered products that deliver value to both customers and businesses.",
  },
  {
    slug: "praise",
    name: "Praise",
    role: "Developer",
    photo: "/team/praise-developer.png",
    bio: "Praise Kolawole is a Software Engineering graduate from Bowen University with experience in developing responsive web and mobile applications. He specializes in React, TypeScript, Next.js, Angular, and React Native, with strengths in API integration, application development, and creating intuitive user experiences. He is passionate about solving problems and building reliable, user-friendly software.",
  },
  {
    slug: "semilore",
    name: "Semilore",
    role: "Admin Officer",
    photo: "/team/semilore-admin-officer.png",
    bio: "Bolarinwa Semilore is the Administrative Officer at Mebi Technology with experience providing operational support, coordinating team activities, and facilitating internal communication. She specializes in maintaining organizational records, coordinating meetings, and supporting smooth company workflows. She is proactive, detail-oriented, and passionate about keeping teams organized through effective administrative management, volunteer onboarding, and structured documentation.",
  },
  {
    slug: "sunday",
    name: "Sunday",
    role: "Product Designer",
    photo: "/team/sunday-product-designer.png",
    bio: "Hodewu Sunday is a Product Designer at MEBI Technology LTD with a strong background spanning regulatory compliance, inventory control, procurement management, quality assurance, and customer service. Holding a Bachelor of Arts in Fine and Applied Arts from Olabisi Onabanjo University, he brings a unique creative perspective to digital product development, bridging structured operational discipline with user-centered design, wireframing, and prototyping. He is passionate about crafting intuitive user experiences and maintaining streamlined, efficient operational workflows.",
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
  {
    slug: "benjamin-christiana",
    name: "Benjamin Christiana",
    role: "Customer Support & UI/UX",
    bio: "Benjamin Christiana is a customer support, administrative, and UI/UX professional with experience across telecommunications, travel, and retail operations. She specializes in resolving customer inquiries, streamlining administrative workflows, and designing user-centered digital products, with strengths in customer relationship management, office coordination, and Figma prototyping. She is passionate about enhancing user satisfaction through empathetic support, organized operations, and intuitive interface design.",
  },
];

export const team: TeamMember[] = [...leadership, ...staff];

export function getTeamMemberBySlug(slug: string) {
  return team.find((member) => member.slug === slug);
}
