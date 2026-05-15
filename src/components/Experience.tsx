import { experience } from '../data/experience';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  const timelineRef = useReveal<HTMLDivElement>();
  return (
    <section id="xp">
      <SectionHeader
        number="04"
        label="Curriculum"
        hint="chronological ↓"
        title={
          <>
            A bit of <em>history</em>.
          </>
        }
      />
      <div className="timeline reveal-stagger" ref={timelineRef}>
        {experience.map((e) => (
          <div className="tl-row" key={`${e.years}-${e.company}`}>
            <div className="yr">
              {e.years}
              <small>{e.duration}</small>
            </div>
            <div className="marker" aria-hidden="true">
              <div className="knot" />
            </div>
            <div>
              <h4>
                {e.title} <em>— {e.subtitle}</em>
              </h4>
              <div className="where">{e.where}</div>
              <p>{e.description}</p>
            </div>
            <div className="co">
              <span className="name">{e.company}</span>
              <span className="loc">{e.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
