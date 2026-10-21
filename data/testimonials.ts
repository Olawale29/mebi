export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  isPlaceholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with MEBI has been a great experience. They bring fresh ideas, communicate clearly, and focus on building solutions that address real business challenges. I would recommend them to any business looking to grow digitally.",
    name: "Amara",
  },
  {
    quote:
      "What impressed me most about MEBI Technology was their commitment to understanding our goals before proposing a solution. They combine technical expertise with a practical understanding of business needs, making them a valuable technology partner.",
    name: "Chika",
  },
  {
    quote:
      "MEBI Technology made the entire process seamless. Their team understood our needs and delivered a solution that helped us improve how we manage our business. Their professionalism and attention to detail really stood out.",
    name: "Tunde",
  },
];
