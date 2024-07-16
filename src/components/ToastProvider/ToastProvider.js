import React from "react";

export const ToastContext = React.createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast({ id, variant, message }) {
    setToasts([
      ...toasts,
      {
        id,
        message,
        variant,
      },
    ]);
  }

  function removeToast(id) {
    setToasts(toasts.filter((toast) => id !== toast.id));
  }

  const value = {
    addToast,
    removeToast,
    toasts,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
