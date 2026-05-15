import { profile } from '../data/profile';

const buildDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });

export function Footer() {
  return (
    <footer>
      <div className="left">
        Made by hand, in {profile.base}.
        <br />
        Set in Instrument Serif &amp; Geist.
        <small>© {new Date().getFullYear()} · v3 · last updated {buildDate}</small>
      </div>
      <div className="center" aria-hidden="true">
        since
        <br />
        {profile.since} ✦
      </div>
      <div className="right">
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener">
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
