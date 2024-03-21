import React from "react";
import styles from "./Footer.module.css";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_left}>
          <ul className={styles.menus}>
            <li>
              <Link href="/techstuff">Tech Stuff</Link>
            </li>
            <li>
              <Link href="/offscreen">Off Screen</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div>
            <p>© 2024 Tobias Osmar Basteiro</p>
          </div>
        </div>
        <ul className={styles.social_links}>
          <li>
            <SocialIcon
              target="_blank"
              style={{ height: 40, width: 40 }}
              url="https://www.github.com/tobasteiro"
            />
          </li>
          <li>
            <SocialIcon
              target="_blank"
              style={{ height: 40, width: 40 }}
              url="https://www.linkedin.com/in/tobias-osmar-basteiro"
            />
          </li>
          <li>
            <SocialIcon
              target="_blank"
              style={{ height: 40, width: 40 }}
              url="https://www.instagram.com/tobias.888"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
