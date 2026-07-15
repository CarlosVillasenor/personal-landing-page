import Header from "@/components/Header/Header";
import Content from "@/components/Content/Content";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Content />
    </main>
  );
}
