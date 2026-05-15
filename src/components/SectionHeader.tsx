import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type Props = {
  title: ReactNode;
  number: string;
  label: string;
  hint?: string;
};

export function SectionHeader({ title, number, label, hint }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="sec-h reveal" ref={ref}>
      <h2>{title}</h2>
      <div className="num">
        § {number} · {label}
        {hint && <small>{hint}</small>}
      </div>
    </div>
  );
}
