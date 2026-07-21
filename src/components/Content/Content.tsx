import styles from './Content.module.css';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}