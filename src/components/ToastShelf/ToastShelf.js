import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, deleteToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.key}>
            <Toast id={toast.key} variant={toast.variant} onClose={deleteToast}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
