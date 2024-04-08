import React from "react";
import Link from "next/link";

import { Play, Moon } from "react-feather";

import styles from "./Header.module.css";
import ResponsiveNav from "../ResponsiveNav";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.topbar_wrapper}>
        <ResponsiveNav>
          <ol className={styles.menus}>
            <li>
              <Link href="/tech">Tech Stuff</Link>
            </li>
            <li>
              <Link href="/offscreen">Off Screen</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ol>
        </ResponsiveNav>
        <div className={styles.actions}>
          {/* <DarkModeToggle /> */}
          <button className={styles.action}>
            <Moon size="1.5rem" />
          </button>

          {/* <MusicPlayer /> */}
          <button className={styles.action}>
            <Play size="1.5rem" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
