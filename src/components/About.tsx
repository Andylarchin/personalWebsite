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
          <span>{today} — Charlotte, NC</span>
        </div>
        <h3>Dear visitor,</h3>
        <p>
          Thank you for stopping by. I'm a front-end developer based in Charlotte, currently studying computer science at UNC Charlotte and writing React for a living.
        </p>
        <p>
          These last three years I've been building UI for an enterprise financial-planning platform used by advisors at one of <em>Germany's largest</em> financial firms — the sort of software where a missing validation can quietly mess up someone's pension.
        </p>
        <p>
          If we get to work together, expect <em>thoroughness</em>, a lot of small notes, and a refusal to ship anything I wouldn't be happy to maintain three years from now.
        </p>
        <div className="signoff">Warmly, Andrei</div>
        <div className="ps">P.S. — I'm in EST, reply within 48 hours, and very rarely read DMs after 9pm.</div>
      </article>
    </section>
  );
}
