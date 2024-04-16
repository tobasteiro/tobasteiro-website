import React from "react";
import { format } from "date-fns";
import clsx from "clsx";

import styles from "./BlogHero.module.css";
import Tag from "@/components/Tag";

function BlogHero({ tags, title, publishedOn, className, ...delegated }) {
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <div className={clsx(styles.wrapper, className)} {...delegated}>
      <div className={styles.content}>
        {tags && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>
                <Tag label={tag} />
              </li>
            ))}
          </ul>
        )}
        <h1>{title}</h1>
        <p>
          Published on <time dateTime={publishedOn}>{humanizedDate}</time>
        </p>
      </div>
    </div>
  );
}

export default BlogHero;
