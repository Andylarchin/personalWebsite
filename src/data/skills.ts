export type SkillVariant = 'plain' | 'sage' | 'rust' | 'ink';

export type Skill = {
  glyphHead: string;
  glyphTail: string;
  glyphSuffix?: string;
  name: string;
  years: string;
  variant: SkillVariant;
};

export const skills: Skill[] = [
  { glyphHead: 'T', glyphTail: 's', name: 'TypeScript', years: '6 yrs', variant: 'sage' },
  { glyphHead: 'G', glyphTail: 'o', name: 'Go', years: '2 yrs', variant: 'plain' },
  { glyphHead: 'P', glyphTail: 'y', name: 'Python', years: '5 yrs', variant: 'plain' },
  { glyphHead: 'R', glyphTail: 's', name: 'Rust', years: '1 yr', variant: 'rust' },
  { glyphHead: 'S', glyphTail: 'q', glyphSuffix: 'l', name: 'SQL', years: '7 yrs', variant: 'plain' },
  { glyphHead: 'S', glyphTail: 'h', name: 'Bash', years: '8 yrs', variant: 'plain' },
  { glyphHead: 'R', glyphTail: 'e', name: 'React', years: '7 yrs', variant: 'sage' },
  { glyphHead: 'N', glyphTail: 'x', glyphSuffix: 't', name: 'Next.js', years: '4 yrs', variant: 'plain' },
  { glyphHead: 'N', glyphTail: 'd', name: 'Node.js', years: '8 yrs', variant: 'plain' },
  { glyphHead: 'P', glyphTail: 'g', name: 'Postgres', years: '7 yrs', variant: 'sage' },
  { glyphHead: 'R', glyphTail: 'd', name: 'Redis', years: '5 yrs', variant: 'plain' },
  { glyphHead: 'D', glyphTail: 'k', name: 'Docker', years: '6 yrs', variant: 'ink' },
  { glyphHead: 'A', glyphTail: 'w', glyphSuffix: 's', name: 'AWS', years: '5 yrs', variant: 'plain' },
  { glyphHead: 'K', glyphTail: '8', name: 'Kubernetes', years: '3 yrs', variant: 'plain' },
  { glyphHead: 'G', glyphTail: 'q', glyphSuffix: 'l', name: 'GraphQL', years: '4 yrs', variant: 'plain' },
  { glyphHead: 'g', glyphTail: 'R', glyphSuffix: 'pc', name: 'gRPC', years: '2 yrs', variant: 'plain' },
  { glyphHead: 'F', glyphTail: 'g', name: 'Figma', years: '5 yrs', variant: 'rust' },
  { glyphHead: 'V', glyphTail: 'i', glyphSuffix: 'm', name: 'Vim/Helix', years: '7 yrs', variant: 'ink' },
];
