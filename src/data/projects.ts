export type Project = {
  numeral: string;
  name: string;
  subtitle: string;
  role: string;
  blurb: string;
  tags: string[];
  year: string;
  where: string;
  link: { label: string; href: string };
};

export const projects: Project[] = [
  {
    numeral: 'I',
    name: 'Aurora',
    subtitle: 'collaborative IDE',
    role: 'lead engineer · still shipping',
    blurb:
      "A real-time collaborative IDE for distributed teams. Multiplayer cursors, AST-aware merge resolution, and a runtime that doesn't fall over when your wifi does.",
    tags: ['TypeScript', 'CRDT', 'Rust', 'WebSockets'],
    year: '2025',
    where: 'Lumen Labs',
    link: { label: 'Read more →', href: '#' },
  },
  {
    numeral: 'II',
    name: 'Tidewater',
    subtitle: 'marine data viz',
    role: 'tech lead · NOAA contract',
    blurb:
      'Weather-data visualization platform for marine researchers. Ingests 14 TB/day across 6 satellite feeds. The kind of project where the database is the design.',
    tags: ['Python', 'D3', 'PostGIS', 'WebGL'],
    year: '2024',
    where: 'NOAA Pilot',
    link: { label: 'Read more →', href: '#' },
  },
  {
    numeral: 'III',
    name: 'Klein',
    subtitle: 'note-taking',
    role: 'solo · ongoing personal project',
    blurb:
      'A note-taking app shaped like a notebook, not a database. Local-first, end-to-end encrypted, with a typography engine that respects what writing looks like on a page.',
    tags: ['SwiftUI', 'Rust', 'SQLite'],
    year: '2024',
    where: 'Personal',
    link: { label: 'Visit site →', href: '#' },
  },
  {
    numeral: 'IV',
    name: 'Helix',
    subtitle: 'OSS library',
    role: 'maintainer · 6.2k ★',
    blurb:
      'Open-source state management for React applications that have outgrown Redux. Used in production by ~340 teams. The pull requests keep me honest.',
    tags: ['TypeScript', 'React', 'OSS'],
    year: '2023',
    where: 'GitHub',
    link: { label: 'Source →', href: '#' },
  },
  {
    numeral: 'V',
    name: 'Postscript',
    subtitle: 'newsletter platform',
    role: 'co-founder · 2-person team',
    blurb:
      'A newsletter platform for indie writers. We built the whole stack — editor, payments, deliverability dashboards, subscriber CRM. Quiet exit in 2024.',
    tags: ['Next.js', 'Postgres', 'Stripe', 'AWS'],
    year: '2022',
    where: 'Co-founded',
    link: { label: 'Visit site →', href: '#' },
  },
];
