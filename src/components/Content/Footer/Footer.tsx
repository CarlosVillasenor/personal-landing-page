import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Thank you for taking a look into my website,
        it was coded in <a href="https://code.visualstudio.com/">Visual Studio Code{' '}</a> 
        using <a href="https://nextjs.org/">Next.js</a>,
        <a href="https://www.typescriptlang.org/">{' '}TypeScript</a> &
        <a href="https://github.com/css-modules/css-modules">{' '}CSS Modules</a>.
        If you want to get in touch,
        you can reach me at
        <a href="mailto:carlosdeveloper9@gmail.com?subject=Portfolio%20Inquiry">
          {' '}carlosdeveloper9@gmail.com
        </a>
        .
      </p>
    </footer>
  );
}
