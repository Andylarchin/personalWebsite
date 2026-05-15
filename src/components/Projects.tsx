import { projects, type Project } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <article className="proj-card reveal" ref={ref}>
      <div className="stamp" aria-hidden="true">
        {project.numeral}
      </div>
      <div className="body">
        <h3>
          {project.name} <em>— {project.subtitle}</em>
        </h3>
        <div className="role">{project.role}</div>
        <p>{project.blurb}</p>
        <div className="tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="side">
        <span className="yr">{project.year}</span>
        <span className="where">{project.where}</span>
        <a href={project.link.href} className="link">
          {project.link.label}
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work">
      <SectionHeader
        number="02"
        label="Field notes"
        hint="more soon ↓"
        title={
          <>
            A couple of things
            <br />
            I made <em>recently</em>.
          </>
        }
      />
      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.numeral} project={p} />
        ))}
      </div>
    </section>
  );
}
