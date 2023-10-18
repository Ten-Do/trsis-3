"use client";
import { useRef, useEffect } from "react";
import styles from "./styles.module.css";

export const useModal = () => {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onDismiss = () => {
    overlay.current.style.display = "none";
  };

  const onClick = (e) => {
    if (e.target === overlay.current) {
      onDismiss();
    }
  };
useEffect(() => {
  onDismiss()
}, [])
  const Modal = ({ children }) => {
    return (
      <div ref={overlay} className={styles.overlay} onClick={onClick}>
        <div ref={wrapper} className={styles.wrapper}>
          {children}
        </div>
      </div>
    );
  };

  const showModal = () => {
    overlay.current.style.display = "flex";
  };

  return [Modal, showModal];
};
