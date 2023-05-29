import React from "react";

export type ModalContextType = {
  onClose: () => void;
  closeOnOverlayClick?: boolean;
};

const intialState = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: () => {},
  closeOnOverlayClick: true,
};
export const ModalContext = React.createContext<ModalContextType>(intialState);

export const ModalProvider = ModalContext.Provider;

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => React.useContext(ModalContext);
