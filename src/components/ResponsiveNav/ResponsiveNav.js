"use client";

import React from "react";
import { Mitr } from "next/font/google";

import styles from "./ResponsiveNav.module.css";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const mitr = Mitr({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mitr",
  weight: ["200", "300", "400", "500", "600"],
});

function ResponsiveNav({ theme, children }) {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const toggleHamburger = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", () => setOpen(false));
    return () => {
      document.body.removeEventListener("click", () => setOpen(false));
    };
  }, []);

  return (
    <>
      <div className={styles.hamburgerContainer}>
        <div onClick={toggleHamburger}>
          <div className={styles.hamburger}>
            <div className={`${styles.burger} ${styles.b1}`} />
            <div className={`${styles.burger} ${styles.b2}`} />
            <div className={`${styles.burger} ${styles.b3}`} />
          </div>
        </div>
      </div>

      <Link href="/" className={styles.logo}>
        <p className={mitr.className}>TOBasteiro</p>
      </Link>
      <div
        className={open && isMobile ? styles.responsiveMenus : styles.menus}
        onClick={() => setOpen(false)}
      >
        {children}
      </div>
    </>
  );
}

export default ResponsiveNav;
