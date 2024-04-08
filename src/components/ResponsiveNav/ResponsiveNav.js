"use client";

import React from "react";
import styles from "./ResponsiveNav.module.css";

import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function ResponsiveNav({ children }) {
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
            <div className={styles.burger} />
            <div className={styles.burger} />
            <div className={styles.burger} />
          </div>
        </div>
      </div>

      <Link href="/">
        <Image
          src="/assets/TOBasteiro.png"
          alt="Tobias Basteiro"
          width={100}
          height={15}
        />
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
