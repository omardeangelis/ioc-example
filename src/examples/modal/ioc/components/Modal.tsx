import React from "react";
import { ModalContextType, ModalProvider } from "../context/ModalContext";
import { ModalOverlay } from "./ModalOverlay";

type ModalProps = ModalContextType & {
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  closeOnOverlayClick,
}) => {
  const ctx = React.useMemo(
    () => ({ onClose, closeOnOverlayClick }),
    [onClose, closeOnOverlayClick]
  );
  return (
    <div className="modal">
      <ModalProvider value={ctx}>{children}</ModalProvider>
      <ModalOverlay onClick={closeOnOverlayClick ? onClose : undefined} />
    </div>
  );
};
