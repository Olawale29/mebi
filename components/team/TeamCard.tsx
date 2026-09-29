import Image from "next/image";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("");

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-purple-soft/30">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
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
