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
    years: '2024 — 2028',
    duration: 'in progress',
    title: 'BSc Computer Science',
    subtitle: 'cybersecurity concentration',
    where: 'currently in my second year',
    description:
      'Pursuing a BSc in Computer Science with a concentration in Cybersecurity. Coursework in Data Structures & Algorithms, Database Management Systems, Computer Organization, Discrete Mathematics, Calculus II, and Software Engineering.',
    company: 'UNC Charlotte',
    location: 'Charlotte, NC',
  },
  {
    years: '2023 — 2026',
    duration: '3 years',
    title: 'Front-end Developer',
    subtitle: 'contracted to DVAG',
    where: 'remote, while studying',
    description:
      "On ReignCode's contracted engineering team, building production features in a TypeScript/React monorepo for the internal financial-planning platform of Deutsche Vermögensberatung — one of Germany's largest financial advisory firms. Owned a new insurance data-entry module end-to-end (UI, validation, state, API, tests), shipped a GrowthBook-gated subsidy-data tab, fixed backend perf on high-traffic flows, and led the React 18 → 19 migration across a shared design-system component library.",
    company: 'ReignCode',
    location: 'Remote · Germany',
  },
];
