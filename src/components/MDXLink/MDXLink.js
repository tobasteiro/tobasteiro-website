import React from "react";

function MDXLink({ url, label, external = true }) {
  return (
    <a href={url} target={external ? "_blank" : "_self"}>
      {label}
    </a>
  );
}

export default MDXLink;
