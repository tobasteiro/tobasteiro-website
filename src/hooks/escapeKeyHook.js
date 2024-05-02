import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [callback]);
}

export default useEscapeKey;
