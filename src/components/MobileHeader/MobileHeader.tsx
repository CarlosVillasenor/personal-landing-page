"use client";

import { navigationItems } from "@/components/Header/headerData";
import { useActiveSection } from "@/hooks/useActiveSection";
import styles from "./MobileHeader.module.css";

export default function MobileHeader() {
	const activeSection = useActiveSection();

  console.log("activeSection", activeSection);

	return (
		<header className={styles.wrapper}>
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
							{item.label}
						</a>
					);
				})}
			</nav>
		</header>
	);
}