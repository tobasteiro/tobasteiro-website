import React from "react";

import { X } from "react-feather";

import styles from "./Modal.module.css";

function Modal({ children, showModal, setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal ? (
        <div
          className={`${styles.modalContainer} ${
            showModal ? styles.on : styles.off
          }`}
        >
          <div className={styles.modalDialog}>
            <div className={styles.actions}>
              <button onClick={closeModal}>
                <X />
              </button>
            </div>
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
