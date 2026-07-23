import styles from './Projects.module.css';
import Badge from './Badge';
import { projects } from './ProjectsData';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="divider" aria-hidden="true" />

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <Badge key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
