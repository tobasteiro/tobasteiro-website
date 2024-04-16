import Link from "next/link";

import styles from "./not-found.module.css";

export async function generateMetadata() {
  return {
    title: "Not Found",
    description: "Could not find requested resource",
  };
}

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
