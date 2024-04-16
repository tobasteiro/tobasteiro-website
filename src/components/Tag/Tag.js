import React from "react";
import Link from "next/link";

import styles from "./Tag.module.css";

function Tag({ label, variant = "default" }) {
  return (
    <Link href={`/tags/${label}`}>
      <span className={`${styles.tag} ${styles[variant]}`}>{label}</span>
    </Link>
  );
}

export default Tag;
