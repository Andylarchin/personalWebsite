export type ExperienceEntry = {
  years: string;
  duration: string;
  title: string;
  subtitle: string;
  where: string;
  description: string;
  company: string;
  location: string;
};

export const experience: ExperienceEntry[] = [
  {
    years: '2023 — Now',
    duration: '3 years',
    title: 'Senior Full-stack Engineer',
    subtitle: 'infrastructure & DX',
    where: 'currently here, mostly happily',
    description:
      'Building Aurora and internal developer tools. Lead on real-time infrastructure and engineering experience. Maintainer of the developer-tooling working group; mentor for new engineering hires.',
    company: 'Lumen Labs',
    location: 'Berlin · Remote',
  },
  {
    years: '2021 — 2023',
    duration: '2 years',
    title: 'Full-stack Engineer',
    subtitle: 'platform team',
    where: "my first 'big' product job",
    description:
      'Owned the customer-facing dashboard and billing surface. Migrated the platform from a monolith to a small set of well-named services. Mentored two juniors who are now better than me.',
    company: 'Spindle Inc.',
    location: 'Bucharest',
  },
  {
    years: '2019 — 2021',
    duration: '2 years',
    title: 'Freelance Web Developer',
    subtitle: 'for hire',
    where: '22 projects, no two alike',
    description:
      'Designed and built sites for studios, restaurants, and small product teams across Europe. Learned more in two years than in the four before. Still proud of the menu page for a café in Cluj.',
    company: 'Independent',
    location: 'Various',
  },
  {
    years: '2017 — 2019',
    duration: 'first job ✦',
    title: 'Junior Developer',
    subtitle: 'e-commerce',
    where: 'where I learned what not to do',
    description:
      'First job out of school. Maintained an e-commerce stack written by people who had since left, and learned what not to do with PHP, jQuery, and a long weekend.',
    company: 'Vega Studio',
    location: 'Cluj-Napoca',
  },
];
