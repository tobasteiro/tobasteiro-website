"use client";

import React from "react";

function AdjustContainer({ children, title }) {
  const titleElement = React.useRef();
  const contentElement = React.useRef();

  // const [width, setWidth] = React.useState("90%");
  const [height, setHeight] = React.useState("fit-content");

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);

    const currentElement = titleElement.current;
    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, []);

  const handleIntersection = (entries) => {
    // entries.map((entry) => {
    //   // console.log(entry.intersectionRatio);
    //   entry.intersectionRatio === 1
    //     ? setHeight("fit-content")
    //     : setHeight("0px");
    // });
  };

  return (
    <>
      <h2 ref={titleElement}>{title}</h2>
      <div
        ref={contentElement}
        className="adjustContainer"
        style={{ height, transition: "height 2s" }}
      >
        {children}
      </div>
    </>
  );
}

export default AdjustContainer;
