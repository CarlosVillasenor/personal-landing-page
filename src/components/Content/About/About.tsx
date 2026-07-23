import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.avatarStage}>
        <Image
          src="/avatar/avatar.png"
          alt="About me"
          width={140}
          height={140}
          className={styles.avatar}
          loading="eager"
        />
      </div>

      <p className={styles.paragraph}>
        Hi! I'm a Senior Frontend Developer with over 7 years of experience building modern,
        high-performance web applications. I specialize in React and scalable frontend
        architecture, with a strong focus on performance, code quality, accessibility,
        and exceptional user experiences.
      </p>
      <p className={styles.paragraph}>
        For four years, I helped develop the STV version of
        <a
          href="https://beacon.support.brightcove.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {' '}
          Beacon
        </a>
        ,
        an OTT platform for Smart TVs used by
        thousands of users. I implemented new features, reduced the production bundle size by 20%,
        and optimized the build process, cutting compilation times from 20 minutes to less than
        5 minutes.
      </p>
      <p className={styles.paragraph}>
        I've worked extensively with React, Redux, React Router, custom Hooks, and
        <a
          href="https://github.com/videojs"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {' '}
          Video.js
        </a>
        ,
        in particular I worked on the development of a custom Video.js plugin called
        <a
          href="https://legacy.videojs.org/guides/spatial-navigation/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {' '}
          Spatial Navigation
          {' '}
        </a>
        , which improved the user experience for Smart TV users.
      </p>
      <p className={styles.paragraph}>
        Earlier in my career, I maintained fintech web applications built with Django (Python),
        working across both frontend and backend features. I also developed a scholarship
        management platform from scratch using Polymer and Vue.js.
      </p>
      <p className={styles.paragraph}>
        My main hobbies include doing exercise, chilling with the boys, listening to audiobooks,
        and painting Warhammer miniatures.
      </p>
    </section>
  );
}