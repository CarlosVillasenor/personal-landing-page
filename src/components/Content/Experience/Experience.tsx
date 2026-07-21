import styles from './Experience.module.css';
import Badge from './Badge';
import { experiences } from './ExperienceData';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.divider} aria-hidden="true" />

      {experiences.map((experience) => (
        <Badge key={experience.company} experience={experience} />
      ))}

      <a href="/curriculum-vitae.pdf" target="_blank" rel="noopener noreferrer">
        View full curriculum vitae
      </a>
    </section>
  );
}