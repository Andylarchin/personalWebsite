export type Profile = {
  name: string;
  initials: { primary: string; secondary: string };
  role: string;
  established: string;
  status: string;
  meta: { label: string; value: string }[];
  contact: {
    email: string;
    linkedin: string;
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
  role: 'Front-end',
  established: 'est. 2023',
  status: 'Open to summer 2026 roles',
  meta: [
    { label: 'Studying', value: 'CS @ UNC Charlotte' },
    { label: 'Based', value: 'Charlotte, NC · Remote' },
    { label: 'Since', value: '2023, give or take' },
  ],
  contact: {
    email: 'andreimetgher@gmail.com',
    linkedin: 'linkedin.com/in/andymetgher',
    replyIn: '< 48 hours',
    timezone: 'EST · Charlotte',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/andylarchin' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andymetgher' },
    { label: 'andreimetgher@gmail.com', href: 'mailto:andreimetgher@gmail.com' },
  ],
  base: 'Charlotte',
  since: '2023',
};
