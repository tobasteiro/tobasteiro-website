import React from "react";
import { getBlogPostList } from "@/helpers/file-helpers";
import styles from "./techpage.module.css";
import BlogSummaryCard from "@/components/BlogSummaryCard";
import Tag from "@/components/Tag";

async function TechStuff({ tag }) {
  const blogPosts = await getBlogPostList(tag);

  return (
    <div className={styles.wrapper}>
      <div className={styles.postsList}>
        {blogPosts.map((post) => (
          <BlogSummaryCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            abstract={post.abstract}
            publishedOn={post.publishedOn}
            tags={post.tags}
          />
        ))}

        {blogPosts.length === 0 && (
          <p className={styles.noPosts}>No posts found</p>
        )}
      </div>
      <div className={styles.sidebar}>
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
    </div>
  );
}

export default TechStuff;
