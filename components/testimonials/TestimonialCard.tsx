import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-white p-8 md:p-10">
      <div>
        {testimonial.isPlaceholder && (
          <span className="mb-5 inline-block rounded-full bg-purple-soft/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-dark">
            Sample — for layout only
          </span>
        )}
        <blockquote className="text-balance text-xl leading-relaxed text-ink md:text-2xl">
          “{testimonial.quote}”
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light/40 text-sm font-semibold text-primary-dark">
          {testimonial.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-sm text-muted">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
