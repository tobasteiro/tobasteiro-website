"use client";
import React from "react";
import clsx from "clsx";

import { range } from "@/utils";
import { motion, LayoutGroup, MotionConfig } from "framer-motion";
import Card from "@/components/Card";
import SliderControl from "@/components/SliderControl";

import Equation from "./Equation";
import styles from "./DivisionGroupsDemo.module.css";

function DivisionGroupsDemo({
  numOfItems = 12,
  initialNumOfGroups = 1,
  includeRemainderArea,
}) {
  const [numOfGroups, setNumOfGroups] = React.useState(initialNumOfGroups);

  const componentId = React.useId();

  const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups);

  const remainder = includeRemainderArea ? numOfItems % numOfGroups : null;

  // When we're splitting into 1-3 groups, display side-by-side
  // columns. When we get to 4, it should switch to a 2x2 grid.
  const gridStructure =
    numOfGroups < 4
      ? {
          gridTemplateColumns: `repeat(${numOfGroups}, 1fr)`,
        }
      : {
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        };
  let counter = 0;
  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>
        <Card as="section" className={styles.wrapper}>
          <header className={styles.header}>
            <SliderControl
              label="Number of Groups"
              className={styles.slider}
              step={1}
              min={1}
              max={4}
              value={numOfGroups}
              onChange={(ev) => setNumOfGroups(Number(ev.target.value))}
            />
          </header>

          <div className={styles.demoWrapper}>
            <div className={clsx(styles.demoArea)} style={gridStructure}>
              {range(numOfGroups).map((groupIndex) => (
                <div
                  key={`${componentId}-${groupIndex}`}
                  className={styles.group}
                >
                  {range(numOfItemsPerGroup).map((index) => {
                    return (
                      <motion.div
                        layoutId={`${componentId}-${counter++}`}
                        initial={false}
                        key={`${componentId}-${counter}`}
                        className={styles.item}
                      >
                        {counter}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {includeRemainderArea && (
            <div className={styles.remainderArea}>
              <p className={styles.remainderHeading}>Remainder Area</p>

              {range(remainder)
                .map((index) => {
                  return (
                    <motion.div
                      layoutId={`${componentId}-${counter++}`}
                      initial={false}
                      key={`${componentId}-${counter}`}
                      className={styles.item}
                    >
                      {counter}
                    </motion.div>
                  );
                })
                .reverse()}
            </div>
          )}

          <Equation
            dividend={numOfItems}
            divisor={numOfGroups}
            remainder={remainder}
          />
        </Card>
      </LayoutGroup>
    </MotionConfig>
  );
}

export default DivisionGroupsDemo;
