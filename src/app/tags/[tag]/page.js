import TechStuff from "@/app/tech/page";
import React from "react";

async function PostTag({ params }) {
  return <TechStuff tag={params.postTag} />;
}

export default PostTag;
