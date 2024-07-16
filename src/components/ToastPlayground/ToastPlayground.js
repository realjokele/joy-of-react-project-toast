import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastMessage, setToastMessage] = React.useState("Enter your message");
  const [toasts, setToasts] = React.useState([]);

  const handleChangeToastVariant = (event) => {
    setToastVariant(event.target.value);
  };

  const handleChangeToastMessage = (event) => {
    setToastMessage(event.target.value);
  };

  const addToast = (event) => {
    event.preventDefault();
    setToastMessage("");
    setToastVariant(VARIANT_OPTIONS[0]);
    setToasts([
      ...toasts,
      {
        message: toastMessage,
        variant: toastVariant,
        key: crypto.randomUUID(),
      },
    ]);
  };

  const dismissToast = (key) => {
    setToasts(toasts.filter((toast) => toast.key !== key));
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} dismissToast={dismissToast} />

      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => addToast(event)}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={toastMessage}
              onChange={(event) => handleChangeToastMessage(event)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label htmlFor={`variant-${variant}`} key={variant}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={variant === toastVariant}
                  onChange={(event) => handleChangeToastVariant(event)}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
