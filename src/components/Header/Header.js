import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Play, Moon } from "react-feather";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.topbar_wrapper}>
        <Link href="/">
          <Image
            src="/assets/TOBasteiro.png"
            alt="Tobias Basteiro"
            width={100}
            height={15}
          />
        </Link>

        <ol className={styles.menus}>
          <li>
            <Link href="/techstuff">Tech Stuff</Link>
          </li>
          <li>
            <Link href="/offscreen">Off Screen</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ol>

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
