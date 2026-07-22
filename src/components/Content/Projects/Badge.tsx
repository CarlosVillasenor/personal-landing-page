import styles from "./Badge.module.css";
import Image from "next/image";

type project = {
  title: string;
  description: string;
  technologies: string[];
  website: string;
  image: string;
};

export default function Badge({ project }: { project: project }) {
  return (
    <a className={styles.badgeLink} href={project.website} target="_blank" rel="noopener noreferrer">
      <article className={styles.projectItem}>
        <p className={styles.period}>{project.title}</p>

        <div className={styles.projectBody}>
          <h3 className={styles.projectTitle}>
            {project.description}
            <span className={styles.projectDot}>-</span>
            <span
              className={styles.companyLink}
            >
              {project.image}
            </span>
          </h3>

          <p className={styles.paragraph}>
            {project.description}
          </p>

          <ul className={styles.techList} aria-label="Tech stack">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <Image src={`/project-images/${project.image}`} alt={project.title} width={500} height={300} />
        </div>
      </article>
    </a>
  )
} 