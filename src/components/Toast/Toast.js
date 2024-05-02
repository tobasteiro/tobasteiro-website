import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, handleDismiss }) {
  const IconTag = ICONS_BY_VARIANT[variant];

  const className = styles[variant];

  return (
    <div className={`${styles.toast} ${className}`}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => {
          handleDismiss();
        }}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
