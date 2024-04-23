import React from "react";
import { getBlogPostList } from "@/helpers/file-helpers";
import styles from "./techpage.module.css";
import BlogSummaryCard from "@/components/BlogSummaryCard";
import TechSidebar from "@/components/TechSidebar";

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
      <TechSidebar />
    </div>
  );
}

export default TechStuff;
