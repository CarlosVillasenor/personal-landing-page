"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import { navigationItems, socialLinks } from "./headerData";
import { useActiveSection } from "@/hooks/useActiveSection";
import AnimatedText from "@/components/Animated/AnimatedText/AnimatedText";

export default function Header() {
  const activeSection = useActiveSection();

  return (
    <header className={styles.header}>
      <div className={styles.headerGlow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.identity}>
          <h1 className={styles.name}>
            <AnimatedText delay={0.3}>
              Carlos
              <br />
              Villaseñor
            </AnimatedText>
          </h1>

          <p className={styles.role}>
            <AnimatedText delay={0.1} startDelay={0.5}>
              Software Engineer - Frontend
            </AnimatedText>
          </p>

          <p className={styles.pitch}>
            <AnimatedText delay={0.05} startDelay={1}>
              I build fast, accessible and scalable web applications with clean
              code and great user experiences.
            </AnimatedText>
          </p>
        </div>

        <nav className={styles.nav} aria-label="Primary sections">
          {navigationItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
              >
                <span className={styles.navRule} aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <footer className={styles.socials} aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label}>
              <Image
                src={`/tech-icons/${link.label}.svg`}
                alt={link.label}
                width={24}
                height={24}
              />
            </a>
          ))}
        </footer>
      </div>
    </header>
  );
}
