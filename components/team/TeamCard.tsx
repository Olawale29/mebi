import Image from "next/image";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("");

  return (
    <div className="group">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white ring-1 ring-ink/5">
        {member.photo ? (
          // The frame is laid out at 4:5 and the square card crops it, so
          // every photo is cut at the same line below the shoulders. Scale
          // and shift line the heads up at one size and height.
          <div
            className="absolute inset-x-0 top-0 h-[125%] origin-top"
            style={
              member.frame
                ? {
                    transform: `translateY(${member.frame.y}%) scale(${member.frame.scale})`,
                  }
                : undefined
            }
          >
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 motion-reduce:transition-none"
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-purple-soft/30">
            <span className="text-2xl font-semibold text-primary-dark/50">
              {initials}
            </span>
          </div>
        )}
      </div>
      <p className="mt-4 font-semibold text-ink">{member.name}</p>
      <p className="text-sm text-muted">{member.role}</p>
      {member.bio && (
        <p className="mt-2 text-sm leading-relaxed text-muted/80">{member.bio}</p>
      )}
    </div>
  );
}
