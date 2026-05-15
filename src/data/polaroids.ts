export type Polaroid = {
  className: 'p1' | 'p2' | 'p3';
  imgLabel: string;
  caption: string;
};

export const polaroids: Polaroid[] = [
  { className: 'p1', imgLabel: 'desk · 2026', caption: 'where the work happens' },
  { className: 'p2', imgLabel: 'tagged · ios', caption: 'NFC tag prototype' },
  { className: 'p3', imgLabel: 'charlotte · 2025', caption: 'campus afternoon ✦' },
];
