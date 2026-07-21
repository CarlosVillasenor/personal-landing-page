import styles from "./Badge.module.css";

type experience = {
  period: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
  website: string;
};

export default function Badge({ experience }: { experience: experience }) {
  return (
    <a className={styles.badgeLink} href={experience.website} target="_blank" rel="noopener noreferrer">
      <article className={styles.experienceItem}>
        <p className={styles.period}>{experience.period}</p>

        <div className={styles.experienceBody}>
          <h3 className={styles.experienceTitle}>
            {experience.role}
            <span className={styles.experienceDot}>-</span>
            <span
              className={styles.companyLink}
            >
              {experience.company}
            </span>
          </h3>

          <p className={styles.paragraph}>
            {experience.description}
          </p>

          <ul className={styles.techList} aria-label="Tech stack">
            {experience.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </article>
    </a>
  )
}