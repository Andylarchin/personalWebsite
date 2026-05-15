import { useEffect, useRef } from 'react';
import { profile } from '../data/profile';
import { polaroids } from '../data/polaroids';
import { useReveal } from '../hooks/useReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

const baseRotation: Record<string, number> = { p1: -6, p2: 4, p3: -2 };

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const polaroidRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  const textReveal = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (reduceMotion) return;
    const hero = heroRef.current;
    if (!hero) return;

    function onMove(e: MouseEvent) {
      const rect = hero!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      polaroidRefs.current.forEach((p, i) => {
        if (!p) return;
        const depth = (i + 1) * 4;
        const cls = p.classList.contains('p1') ? 'p1' : p.classList.contains('p2') ? 'p2' : 'p3';
        const base = baseRotation[cls] ?? 0;
        p.style.transform = `rotate(${base}deg) translate(${x * depth}px, ${y * depth}px)`;
      });
    }
    function onLeave() {
      polaroidRefs.current.forEach((p) => {
        if (p) p.style.transform = '';
      });
    }

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    return () => {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, [reduceMotion]);

  return (
    <section className="hero" ref={heroRef}>
      <div className="reveal" ref={textReveal}>
        <span className="pre">✦ Hello, I'm —</span>
        <h1>
          A front-end
          <br />
          developer who
          <br />
          builds software
          <br />
          that <em>holds up</em>.
        </h1>
        <p className="lede">
          I'm Andrei. I write React for an enterprise financial-planning platform by day, and study computer science at <em>UNC Charlotte</em> the rest of the week.
        </p>
        <div className="meta">
          {profile.meta.map((m) => (
            <div className="item" key={m.label}>
              <span className="l">{m.label}</span>
              <span className="v">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="polaroids" aria-hidden="true">
        {polaroids.map((p, i) => (
          <div
            key={p.className}
            ref={(el) => {
              polaroidRefs.current[i] = el;
            }}
            className={`polaroid ${p.className} reveal-tilt in`}
          >
            <div className="img">
              <span>{p.imgLabel}</span>
            </div>
            <div className="cap">{p.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
