import React from "react";

import Toast from "@/components/Toast";
import { ToastContext } from "@/components/ToastProvider";
import VisuallyHidden from "@/components/VisuallyHidden";
import useEscapeKey from "@/hooks/escapeKeyHook";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { modalList, deleteToast, clearToasts } =
    React.useContext(ToastContext);

  useEscapeKey(() => {
    clearToasts();
  });

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {modalList.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleDismiss={() => deleteToast(id)}>
            <VisuallyHidden>{`${variant} - `}</VisuallyHidden>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
