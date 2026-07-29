import styles from './Projects.module.css';
import ProjectBadge from './ProjectBadge';
import { projects } from './projectsData';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="divider" aria-hidden="true" />

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectBadge key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
