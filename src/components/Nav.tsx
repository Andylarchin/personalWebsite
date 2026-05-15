import { profile } from '../data/profile';
import { navSections } from '../data/sections';
import { useActiveSection } from '../hooks/useActiveSection';

export function Nav() {
  const active = useActiveSection(navSections.map((s) => s.id));

  return (
    <nav aria-label="Primary">
      <a href="#" className="brand" aria-label={`${profile.name} — home`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="seal" aria-hidden="true">
          {profile.initials.primary}
          <em style={{ fontStyle: 'italic' }}>{profile.initials.secondary}</em>
        </div>
        <div className="text">
          <strong>{profile.name}</strong>
          <small>{profile.role} · {profile.established}</small>
        </div>
      </a>
      <ul>
        {navSections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={active === s.id ? 'active' : undefined}>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nowat">
        <span className="dot" aria-hidden="true" /> {profile.status}
      </div>
    </nav>
  );
}
