import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

const today = new Date().toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about">
      <SectionHeader
        number="01"
        label="About"
        hint="read carefully ✦"
        title={
          <>
            A short letter,
            <br />
            about <em>me</em>.
          </>
        }
      />
      <article className="about-letter reveal" ref={ref}>
        <div className="from">
          <span>From the desk of A. Metgher</span>
          <span>{today} — Bucharest</span>
        </div>
        <h3>Dear visitor,</h3>
        <p>
          Thank you for stopping by. I'm a full-stack developer, which is to say I'll happily write a database migration in the morning, a CSS animation in the afternoon, and then argue about typography until the evening.
        </p>
        <p>
          I work best on small teams where the difference between <em>fine</em> and <em>great</em> still matters. Lately that's been Lumen Labs, building tools for other developers — but I started out making restaurant websites and have not entirely outgrown the joy of a clean menu page.
        </p>
        <p>
          If we get to work together, expect <em>thoroughness</em>, a lot of small notes, and a refusal to ship anything I wouldn't be happy to maintain three years from now.
        </p>
        <div className="signoff">Warmly, Andrei</div>
        <div className="ps">P.S. — I'm in UTC+2, reply within 48 hours, and very rarely read DMs after 9pm.</div>
      </article>
    </section>
  );
}
