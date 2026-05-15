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
  { glyphHead: 'T', glyphTail: 's', name: 'TypeScript', years: '3 yrs', variant: 'sage' },
  { glyphHead: 'J', glyphTail: 's', name: 'JavaScript', years: '3 yrs', variant: 'plain' },
  { glyphHead: 'S', glyphTail: 'w', glyphSuffix: 't', name: 'Swift', years: '1 yr', variant: 'rust' },
  { glyphHead: 'J', glyphTail: 'a', glyphSuffix: 'va', name: 'Java', years: '2 yrs', variant: 'plain' },
  { glyphHead: 'S', glyphTail: 'q', glyphSuffix: 'l', name: 'SQL', years: '1 yr', variant: 'plain' },
  { glyphHead: 'H', glyphTail: 't', glyphSuffix: 'ml', name: 'HTML', years: '4 yrs', variant: 'plain' },
  { glyphHead: 'C', glyphTail: 's', glyphSuffix: 's', name: 'CSS', years: '4 yrs', variant: 'plain' },
  { glyphHead: 'R', glyphTail: 'e', name: 'React', years: '3 yrs', variant: 'sage' },
  { glyphHead: 'T', glyphTail: 'w', name: 'Tailwind', years: '2 yrs', variant: 'plain' },
  { glyphHead: 'N', glyphTail: 'd', name: 'Node.js', years: '2 yrs', variant: 'plain' },
  { glyphHead: 'S', glyphTail: 'U', glyphSuffix: 'I', name: 'SwiftUI', years: '1 yr', variant: 'sage' },
  { glyphHead: 'N', glyphTail: 'F', glyphSuffix: 'C', name: 'Core NFC', years: '1 yr', variant: 'plain' },
  { glyphHead: 'G', glyphTail: 'i', glyphSuffix: 't', name: 'Git', years: '4 yrs', variant: 'ink' },
  { glyphHead: 'G', glyphTail: 'h', name: 'GitHub', years: '4 yrs', variant: 'plain' },
  { glyphHead: 'V', glyphTail: 's', glyphSuffix: 'c', name: 'VS Code', years: '4 yrs', variant: 'ink' },
  { glyphHead: 'X', glyphTail: 'c', name: 'Xcode', years: '1 yr', variant: 'plain' },
  { glyphHead: 'L', glyphTail: 'c', name: 'Lucidchart', years: '1 yr', variant: 'plain' },
  { glyphHead: 'J', glyphTail: 'r', name: 'Jira', years: '3 yrs', variant: 'plain' },
];
