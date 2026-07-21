import styles from './Experience.module.css';
import Badge from './Badge';
import { experiences } from './ExperienceData';
import Link from 'next/link';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.divider} aria-hidden="true" />

      {experiences.map((experience) => (
        <Badge key={experience.company} experience={experience} />
      ))}

      <Link
        className={styles.cvLink}
        href="https://drive.google.com/file/d/18Qc_ML2Qe_o3uofCgg6PzFY7oSK-CdqT/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer">
        <span>Get Curriculum Vitae</span>
      </Link>
    </section>
  );
}