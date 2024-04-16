import React from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import BlogHero from "@/components/BlogHero";

import { loadBlogPost } from "@/helpers/file-helpers";

import { MDXRemote } from "next-mdx-remote/rsc";

import styles from "./postSlug.module.css";
import CodeSnippet from "@/components/CodeSnippet";

const DivisionGroupsDemo = dynamic(() =>
  import("@/components/DivisionGroupsDemo")
);

const MDXLink = dynamic(() => import("@/components/MDXLink"));

const CircularColorsDemo = dynamic(() =>
  import("@/components/CircularColorsDemo")
);

export const getBlogPostData = React.cache(async (slug) => {
  try {
    return await loadBlogPost(slug);
  } catch (error) {
    notFound();
  }
});

export async function generateMetadata({ params }) {
  const file = await getBlogPostData(params.postSlug);
  return {
    title: file.frontmatter.title,
    description: file.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const file = await getBlogPostData(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        tags={file.frontmatter.tags?.split(",")}
        title={file.frontmatter.title}
        publishedOn={file.frontmatter.publishedOn}
      />
      <div className={styles.pageWrapper}>
        <div className={styles.page}>
          <MDXRemote
            source={file.content}
            components={{
              pre: CodeSnippet,
              DivisionGroupsDemo,
              CircularColorsDemo,
              MDXLink,
            }}
          />
        </div>

        <div className={styles.pageSidebar}>sidebar</div>
      </div>
    </article>
  );
}

export default BlogPost;
