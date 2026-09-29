// Placeholder testimonials — no real client quotes have been supplied.
// Each entry is clearly illustrative; replace with real testimonials
// (and set isPlaceholder to false) as they come in.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  isPlaceholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sample testimonial copy — replace with a real client quote. This space is reserved for feedback on how MEBI approached discovery, design and delivery.",
    name: "Client Name",
    role: "Role",
    company: "Company",
    isPlaceholder: true,
  },
  {
    quote:
      "Sample testimonial copy — replace with a real client quote once available. This placeholder illustrates layout and length only.",
    name: "Client Name",
    role: "Role",
    company: "Company",
    isPlaceholder: true,
  },
  {
    quote:
      "Sample testimonial copy — replace with a real client quote. Testimonials should speak to outcomes, collaboration and delivery quality.",
    name: "Client Name",
    role: "Role",
    company: "Company",
    isPlaceholder: true,
  },
];
