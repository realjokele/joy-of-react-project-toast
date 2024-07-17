import React from "react";

export function useEscapeKay(callback) {
  React.useEffect(() => {
    window.addEventListener("keydown", callback);
    return () => window.removeEventListener("keydown", callback);
  }, [callback]);
}
