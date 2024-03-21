import styles from "./page.module.css";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  );
}
