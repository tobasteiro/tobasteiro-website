import React from "react";
import Link from "next/link";
import { format } from "date-fns";

import Card from "@/components/Card";

import styles from "./BlogSummaryCard.module.css";
import Tag from "../Tag";

function BlogSummaryCard({ slug, title, publishedOn, abstract, tags }) {
  const href = `/tech/${slug}`;
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <Card className={styles.wrapper}>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      {tags && (
        <ul className={styles.tags}>
          {tags.split(",").map((tag) => (
            <li key={tag}>
              <Tag label={tag} variant="ghost" />
            </li>
          ))}
        </ul>
      )}
      <time dateTime={publishedOn}>{humanizedDate}</time>
      <p className={styles.abstract}>
        {abstract}{" "}
        <Link href={href} className={styles.continueReadingLink}>
          Continue reading <span className={styles.arrow}>→</span>
        </Link>
      </p>
    </Card>
  );
}

export default BlogSummaryCard;
