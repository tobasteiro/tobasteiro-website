import React from "react";

import styles from "./Button.module.css";

function Button({ className = "", ...delegated }, ref) {
  return (
    <button
      ref={ref}
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default React.forwardRef(Button);
