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
    name: 'Tagged',
    subtitle: 'NFC-gated focus app for iOS',
    role: 'solo · Swift, SwiftUI, Core NFC',
    blurb:
      "A native iOS app that locks distracting apps behind a physical NFC tag tap. Uses Apple's FamilyControls / ManagedSettings to enforce system-level restrictions you can't bypass in software, and a session model that survives backgrounding, force-quits, and restarts.",
    tags: ['Swift', 'SwiftUI', 'Core NFC', 'FamilyControls', 'ManagedSettings'],
    year: '2025 — 2026',
    where: 'Personal',
    link: { label: 'Read more →', href: '#' },
  },
  {
    numeral: 'II',
    name: 'Registrar',
    subtitle: 'university database schema',
    role: 'coursework · ERD → 3NF',
    blurb:
      'Designed a normalized university management database from scratch — conceptual ERD, logical model, and a relational schema covering students, courses, enrollment, and faculty. Normalized to 3NF, transitive dependencies eliminated, referential integrity preserved across foreign keys.',
    tags: ['Lucidchart', 'SQL', 'ERD', '3NF'],
    year: 'Spring 2026',
    where: 'UNC Charlotte',
    link: { label: 'Read more →', href: '#' },
  },
];
