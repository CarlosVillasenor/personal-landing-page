import styles from "./ProjectBadge.module.css";
import Image from "next/image";
import AnimatedOnScroll from "../../AnimatedOnScroll/AnimatedOnScroll";

type project = {
  title: string;
  description: string;
  technologies: string[];
  website: string;
  image: string;
};

export default function ProjectBadge({ project }: { project: project }) {
  return (
    <AnimatedOnScroll>
      <a className={styles.badgeLink} href={project.website} target="_blank" rel="noopener noreferrer">
        <article className={styles.projectItem}>
        <div className={styles.projectHeader}>
          <p className={styles.title}>{project.title}</p>
          <Image
            src={`/project-images/${project.image}`}
            alt={project.title}
            width={140} height={80}
            className={styles.projectImage}
          />
        </div>

        <div className={styles.projectBody}>
          <p className={styles.paragraph}>
            {project.description}
          </p>

          <ul className={styles.techList} aria-label="Tech stack">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        </article>
      </a>
    </AnimatedOnScroll>
  );
}
