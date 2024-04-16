"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavItems.module.css";

function NavItems() {
  const currentPath = usePathname();

  return (
    <>
      {" "}
      <li>
        <Link
          className={
            currentPath.startsWith("/tech") || currentPath.startsWith("/tags")
              ? styles.fontsemibold
              : ""
          }
          href="/tech"
        >
          Tech Stuff
        </Link>
      </li>
      <li>
        <Link
          className={
            currentPath.startsWith("/offscreen") ? styles.fontsemibold : ""
          }
          href="/offscreen"
        >
          Off Screen
        </Link>
      </li>
      <li>
        <Link
          className={
            currentPath.startsWith("/contact") ? styles.fontsemibold : ""
          }
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </>
  );
}

export default NavItems;
