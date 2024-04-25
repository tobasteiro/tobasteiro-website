"use client";
import React from "react";
import { Code } from "react-feather";
import Modal from "@/components/Modal";

import styles from "./CodeHoverModalButton.module.css";

function CodeHoverModalButton({ children, codeUrl }) {
  const [showModal, setShowModal] = React.useState(false);
  const [codeContent, setCodeContent] = React.useState(null);

  React.useEffect(() => {
    document.body.addEventListener("click", () => setShowModal(false));
    return () => {
      document.body.removeEventListener("click", () => setShowModal(false));
    };
  }, []);

  const openModal = () => {
    fetch(codeUrl)
      .then((response) => response.json())
      .then((data) => {
        setShowModal(true);
        setCodeContent(data.content);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles.container}>
      <button className={styles.codeButton} onClick={openModal}>
        <Code size="1.5rem" />
      </button>

      {children}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {atob(codeContent)}
      </Modal>
    </div>
  );
}

export default CodeHoverModalButton;
