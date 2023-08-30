import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setModal, children, maxWidth }) => {
  return (
    <>
      <div className={styles.modal}>{children}</div>
      <div className={styles.overlay} onClick={() => setModal(false)}></div>
    </>
  );
};

export default Modal;
