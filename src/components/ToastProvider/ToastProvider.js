import React from "react";

export const ToastContext = React.createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(
    ({ id, variant, message }) => {
      setToasts([
        ...toasts,
        {
          id,
          message,
          variant,
        },
      ]);
    },
    [toasts]
  );

  const removeToast = React.useCallback(
    (id) => {
      setToasts(toasts.filter((toast) => id !== toast.id));
    },
    [toasts]
  );

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  const value = {
    addToast,
    removeToast,
    clearToasts,
    toasts,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
