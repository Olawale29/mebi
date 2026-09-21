// No real team member data has been provided yet. This structure is ready
// to receive real profiles — add entries with the same shape when available.

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
};

export const team: TeamMember[] = [];
