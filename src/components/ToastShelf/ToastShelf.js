import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, dismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.key}>
            <Toast variant={toast.variant}>{toast.message}</Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
