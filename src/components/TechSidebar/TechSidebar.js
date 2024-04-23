import React from "react";

import styles from "./TechSidebar.module.css";
import Tag from "@/components/Tag";

function TechSidebar() {
  return (
    <aside className={styles.pageSidebar}>
      <div>
        <h3>Categories</h3>
        <ul className={styles.tagList}>
          <li>
            <Tag label="React" />
          </li>
          <li>
            <Tag label="NextJS" />
          </li>
        </ul>
      </div>

      {/* <div>
    <h3>Related Articles</h3>
  </div> */}
    </aside>
  );
}

export default TechSidebar;
