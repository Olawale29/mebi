"use client";

import { useState } from "react";
import type { TeamMember } from "@/data/team";
import { TeamCard } from "@/components/team/TeamCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function StaffRoster({ staff }: { staff: TeamMember[] }) {
  const [expanded, setExpanded] = useState(false);

  if (staff.length === 0) return null;

  return (
    <div className="mt-20 border-t border-ink/10 pt-14">
      <div className="flex items-center justify-between gap-6">
        <h2 className="text-2xl font-semibold tracking-[-0.01em] text-ink">
          Rest of the team
        </h2>
        <Button variant="ghost" size="sm" onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Hide" : `View All (${staff.length})`}
        </Button>
      </div>

      {expanded && (
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
          {staff.map((member, i) => (
            <Reveal key={member.slug} delay={0.05 * i}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
