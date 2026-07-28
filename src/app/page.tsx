"use client";

import Header from "@/components/Header/Header";
import Content from "@/components/Content/Content";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import styles from "./page.module.css";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function Home() {
  const isDesktop = useIsDesktop();
  const showMobileHeader = !isDesktop;

  return (
    <main className={styles.main}>
      {showMobileHeader && <MobileHeader />}
      <Header />
      <Content />
    </main>
  );
}
