"use client";

import React from "react";

function TechStuff() {
  const canvasRef = React.useRef(null);
  const outerRadius = 100;
  const innerRadius = 17;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "black";

    ctx.arc(
      outerRadius,
      outerRadius / 2,
      outerRadius / 2,
      toRadians(90),
      toRadians(-90),
      true
    ); // Black half circle
    ctx.arc(
      outerRadius,
      outerRadius + outerRadius / 2,
      outerRadius / 2,
      toRadians(90),
      toRadians(-90),
      false
    ); // Upper curve
    ctx.arc(
      outerRadius,
      outerRadius,
      outerRadius,
      toRadians(-90),
      toRadians(90),
      false
    ); // Bottom curve
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      outerRadius,
      outerRadius,
      outerRadius,
      toRadians(0),
      toRadians(360),
      false
    ); // Outer stroke circle
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      outerRadius,
      outerRadius / 2,
      innerRadius,
      toRadians(0),
      toRadians(360),
      false
    ); // Small black circle
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(
      outerRadius,
      outerRadius + outerRadius / 2,
      innerRadius,
      toRadians(0),
      toRadians(360),
      false
    ); // Small white circle
    ctx.closePath();
    ctx.fill();
  }, []);

  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  return (
    <canvas
      ref={canvasRef}
      width={outerRadius * 2}
      height={outerRadius * 2}
      style={{
        width: `${outerRadius * 2}px`,
        height: `${outerRadius * 2}px`,
        display: "block",
        objectFit: "contain",
      }}
    ></canvas>
  );
}

export default TechStuff;
