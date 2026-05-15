export type Polaroid = {
  className: 'p1' | 'p2' | 'p3';
  imgLabel: string;
  caption: string;
};

export const polaroids: Polaroid[] = [
  { className: 'p1', imgLabel: 'desk · 2024', caption: 'my battlestation' },
  { className: 'p2', imgLabel: 'aurora demo', caption: 'shipping aurora' },
  { className: 'p3', imgLabel: 'cluj · 2023', caption: 'offsite hike ✦' },
];
