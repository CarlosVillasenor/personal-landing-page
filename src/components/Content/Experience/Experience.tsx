import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.divider} aria-hidden="true" />

      <article className={styles.experienceItem}>
        <p className={styles.period}>2021 - Present</p>

        <div className={styles.experienceBody}>
          <h3 className={styles.experienceTitle}>
            Senior Frontend Developer
            <span className={styles.experienceDot}>-</span>
            <a
              href="https://beacon.support.brightcove.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.companyLink}
            >
              Beacon (OTT Platform)
            </a>
          </h3>

          <p className={styles.paragraph}>
            Led development of features for a Smart TV OTT platform used by thousands of users.
            Improved performance, reduced bundle size by 20% and optimized build times from
            20 minutes to less than 5 minutes.
          </p>

          <p className={styles.paragraph}>
            Worked closely with designers, QA and backend teams to ship polished and reliable
            experiences.
          </p>

          <ul className={styles.techList} aria-label="Tech stack">
            <li>React</li>
            <li>Redux</li>
            <li>React Router</li>
            <li>Video.js</li>
            <li>TypeScript</li>
            <li>Jenkins</li>
          </ul>
        </div>
      </article>
    </section>
  );
}