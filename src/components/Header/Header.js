import React from "react";

import { Play } from "react-feather";

import DarkModeToggle from "../DarkModeToggle";

import styles from "./Header.module.css";
import ResponsiveNav from "../ResponsiveNav";
import NavItems from "../NavItems";

function Header({ theme }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.topbar_wrapper}>
        <ResponsiveNav theme={theme}>
          <ol className={styles.menus}>
            <NavItems />
          </ol>
        </ResponsiveNav>
        <div className={styles.actions}>
          <DarkModeToggle initialTheme={theme} />

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
