import styles from "./Header.module.css";
import Image from "next/image";

const navigationItems = [
  { href: "#about", label: "About", active: true },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const socialLinks = [
  {
    href: "https://github.com/CarlosVillasenor",
    label: "GitHub", icon: "GH"
  },
  {
    href: "https://www.linkedin.com/in/carlos-villase%C3%B1or-castillo-6245a0173/",
    label: "LinkedIn", icon: "in"
  },
  {
    href: "https://www.instagram.com/carlosvc.9/", label: "Instagram", icon: "IG"
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerGlow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.identity}>
          <h1 className={styles.name}>
            Carlos
            <br />
            Villaseñor
          </h1>

          <p className={styles.role}>
            Senior Frontend Developer
          </p>

          <p className={styles.pitch}>
            I build fast, accessible and scalable web applications with clean code
            and great user experiences.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Primary sections">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${item.active ? styles.navItemActive : ""}`}
            >
              <span className={styles.navRule} aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <footer className={styles.socials} aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label}>
              <Image src={`/tech-icons/${link.label}.svg`} alt={link.label} width={24} height={24} />
            </a>
          ))}
        </footer>
      </div>
    </header>
  );
}
