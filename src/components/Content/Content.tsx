import styles from './Content.module.css';

export default function Content() {
  return (
    <div className={styles.content}>
      <section id="about" className={styles.section}>
        <p>
          Hi! I'm a Senior Frontend Developer with over 7 years of experience building modern,
          high-performance web applications. I specialize in React and scalable frontend
          architecture, with a strong focus on performance, code quality, accessibility,
          and exceptional user experiences.
        </p>
        <p>
          For four years, I helped develop the STV version of
          <a href="https://beacon.support.brightcove.com/" target="_blank" rel="noopener noreferrer"> Beacon</a>,
          an OTT platform for Smart TVs used by
          thousands of users. I implemented new features, reduced the production bundle size by 20%,
          and optimized the build process, cutting compilation times from 20 minutes to less than
          5 minutes.
        </p>
        <p>
          I've worked extensively with React, Redux, React Router, custom Hooks, and
          <a href="https://github.com/videojs" target="_blank" rel="noopener noreferrer"> Video.js</a>,
          in particular I worked on the development of a custom Video.js plugin called
          <a href="https://legacy.videojs.org/guides/spatial-navigation/" target="_blank" rel="noopener noreferrer"> Spatial Navigation </a>
          , which improved the user experience for Smart TV users.
        </p>
        <p>
          Earlier in my career, I maintained fintech web applications built with Django (Python),
          working across both frontend and backend features. I also developed a scholarship
          management platform from scratch using Polymer and Vue.js.
        </p>
        <p>
          My main hobbies include doing exercise, chilling with the boys, listening to audiobooks,
          and painting Warhammer miniatures.
        </p>
      </section>

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

            <p>
              Led development of features for a Smart TV OTT platform used by thousands of users.
              Improved performance, reduced bundle size by 20% and optimized build times from
              20 minutes to less than 5 minutes.
            </p>

            <p>
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

      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionLabel}>Projects</h2>
      </section>
    </div>
  );
}