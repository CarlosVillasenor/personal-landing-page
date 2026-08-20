import styles from './Projects.module.css';
import ProjectBadge from './ProjectBadge';
import { projects } from '@/data/projectsData';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="divider" aria-hidden="true" />

      <Link href="/projects">View All Projects</Link>

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectBadge key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
