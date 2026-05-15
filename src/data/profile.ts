export type Profile = {
  name: string;
  initials: { primary: string; secondary: string };
  role: string;
  established: string;
  status: string;
  meta: { label: string; value: string }[];
  contact: {
    email: string;
    calendar: string;
    replyIn: string;
    timezone: string;
  };
  socials: { label: string; href: string }[];
  base: string;
  since: string;
};

export const profile: Profile = {
  name: 'Andrei Metgher',
  initials: { primary: 'A', secondary: 'm' },
  role: 'Full-stack',
  established: 'est. 2017',
  status: 'Open for Q3 work',
  meta: [
    { label: 'Currently', value: 'Lumen Labs, Berlin' },
    { label: 'Based', value: 'Bucharest · Remote' },
    { label: 'Since', value: '2017, give or take' },
  ],
  contact: {
    email: 'andrei@example.com',
    calendar: 'cal.com/andrei',
    replyIn: '< 48 hours',
    timezone: 'UTC+2 · Bucharest',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Twitter / X', href: 'https://x.com/' },
    { label: 'Read.cv', href: 'https://read.cv/' },
    { label: 'andrei@example.com', href: 'mailto:andrei@example.com' },
  ],
  base: 'Bucharest',
  since: '2017',
};
