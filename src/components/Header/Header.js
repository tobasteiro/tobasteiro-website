import React from "react";
import Link from "next/link";

import { Play, Moon } from "react-feather";

import styles from "./Header.module.css";
import ResponsiveNav from "../ResponsiveNav";
import NavItems from "../NavItems";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.topbar_wrapper}>
        <ResponsiveNav>
          <ol className={styles.menus}>
            <NavItems />
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
