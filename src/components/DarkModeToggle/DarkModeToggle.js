"use client";

import React from "react";

import Cookie from "js-cookie";
import { Sun, Moon } from "react-feather";

import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";

import VisuallyHidden from "@/components/VisuallyHidden";
import styles from "./DarkModeToggle.module.css";

function DarkModeToggle({ initialTheme = "light" }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function toggleDarkMode() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    Cookie.set("color-theme", nextTheme, {
      expires: 365,
    });

    const root = document.documentElement;
    const colors = nextTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

    // 3.1 — Edit the data-attribute, so that we can apply CSS
    // conditionally based on the theme.
    root.setAttribute("data-color-theme", nextTheme);

    // 3.2 — Swap out the actual colors on the <html> tag.
    //       We do this by iterating over each CSS variable
    //       and setting it as a new inline style.
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <>
      <button className={styles.action} onClick={toggleDarkMode}>
        {theme === "dark" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
        <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
      </button>
    </>
  );
}

export default DarkModeToggle;
