"use client";

import React from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw, Layout } from "react-feather";
import { motion, LayoutGroup, MotionConfig } from "framer-motion";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
  // TODO: This value should increase by 1 every second:
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(COLORS[0]);

  React.useEffect(() => {
    const interval =
      isPlaying &&
      setInterval(() => {
        setTimeElapsed(timeElapsed + 1);

        setSelectedColor(COLORS[(timeElapsed + 1) % COLORS.length]);
      }, 1000);
    return () => clearInterval(interval);
  }, [timeElapsed, setTimeElapsed, isPlaying]);

  function togglePlaying() {
    setIsPlaying((isPlaying) => !isPlaying);
  }

  function resetTimer() {
    setTimeElapsed(0);
    setSelectedColor(COLORS[0]);
    setIsPlaying(false);
  }

  const cmpId = React.useId();
  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>
        <Card as="section" className={styles.wrapper}>
          <ul className={styles.colorsWrapper}>
            {COLORS.map((color, index) => {
              const isSelected = color.value === selectedColor.value;

              return (
                <li className={styles.color} key={index}>
                  {isSelected && (
                    <motion.div
                      layoutId={`${cmpId}`}
                      transition={{ duration: 0.4 }}
                      initial={false}
                      className={styles.selectedColorOutline}
                    />
                  )}
                  <div
                    className={clsx(
                      styles.colorBox,
                      isSelected && styles.selectedColorBox
                    )}
                    style={{
                      backgroundColor: color.value,
                    }}
                  >
                    <VisuallyHidden>{color.label}</VisuallyHidden>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.timeWrapper}>
            <dl className={styles.timeDisplay}>
              <dt>Time Elapsed</dt>
              <dd>{timeElapsed}</dd>
            </dl>
            <div className={styles.actions}>
              <button onClick={() => togglePlaying()}>
                {isPlaying ? (
                  <>
                    <Pause />
                    <VisuallyHidden>Pause</VisuallyHidden>
                  </>
                ) : (
                  <>
                    <Play />
                    <VisuallyHidden>Play</VisuallyHidden>
                  </>
                )}
              </button>

              <button onClick={resetTimer}>
                <RotateCcw />
                <VisuallyHidden>Reset</VisuallyHidden>
              </button>
            </div>
          </div>
        </Card>
      </LayoutGroup>
    </MotionConfig>
  );
}

export default React.memo(CircularColorsDemo);
