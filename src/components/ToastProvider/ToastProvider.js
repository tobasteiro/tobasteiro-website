import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [modalList, setModalList] = React.useState([]);

  const createToast = React.useCallback(
    (variant, message) => {
      const newList = [
        ...modalList,
        { variant, message, id: crypto.randomUUID() },
      ];
      setModalList(newList);
    },
    [modalList]
  );

  const deleteToast = React.useCallback(
    (id) => {
      const newList = [...modalList];

      const nextList = newList.filter((e) => e.id !== id);

      setModalList(nextList);
    },
    [modalList]
  );

  const clearToasts = React.useCallback(() => {
    setModalList([]);
  });

  return (
    <ToastContext.Provider
      value={{
        modalList,
        createToast,
        deleteToast,
        clearToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
