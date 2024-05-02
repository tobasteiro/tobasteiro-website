import React from "react";

import DarkModeToggle from "../DarkModeToggle";

import styles from "./Header.module.css";
import ResponsiveNav from "../ResponsiveNav";
import NavItems from "../NavItems";
import MusicPlayer from "../MusicPlayer";

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

          <MusicPlayer />
        </div>
      </div>
    </header>
  );
}

export default Header;
