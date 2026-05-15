import { skills, type Skill } from '../data/skills';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

function classFor(variant: Skill['variant']) {
  return variant === 'plain' ? 'peg' : `peg ${variant}`;
}

export function Skills() {
  const pegboardRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="stack">
      <SectionHeader
        number="03"
        label="Toolbelt"
        hint="green = favorite ✦"
        title={
          <>
            Things I use
            <br />
            <em>most days</em>.
          </>
        }
      />
      <div className="pegboard reveal" ref={pegboardRef}>
        <div className="pegboard-grid reveal-stagger" ref={gridRef}>
          {skills.map((s) => (
            <div className={classFor(s.variant)} key={s.name} title={`${s.name} · ${s.years}`}>
              <div className="glyph">
                {s.glyphHead}
                <em>{s.glyphTail}</em>
                {s.glyphSuffix}
              </div>
              <div className="nm">{s.name}</div>
              <div className="yrs">{s.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
