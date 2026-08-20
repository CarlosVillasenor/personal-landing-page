import styles from './Experience.module.css';
import ExperienceBadge from './ExperienceBadge';
import { FiDownload } from "react-icons/fi";
import { experiences } from './experienceData';
import Link from 'next/link';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="divider" aria-hidden="true" />

      {experiences.map((experience) => (
        <ExperienceBadge key={experience.company} experience={experience} />
      ))}

      <Link
        className={styles.cvLink}
        href="https://drive.google.com/file/d/19GdgVSOtf9Alwa8JqhC7FEyuxbbkPRzu/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer">
        <span>Get Curriculum Vitae <FiDownload className={styles.downloadIcon} /></span>
      </Link>
    </section>
  );
}
