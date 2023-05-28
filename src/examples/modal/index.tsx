import React from "react";
import { Modal } from "./legacy/Modal";

export function ModalExample() {
  const [showModal, setShowModal] = React.useState(true);
  const onClose = React.useCallback(() => setShowModal(false), []);
  const onBack = React.useCallback(() => setShowModal(false), []);
  const onContinue = React.useCallback(() => setShowModal(false), []);

  const props = React.useMemo(
    () => ({ onClose, onBack, onContinue, modalTitle: "Modal Title" }),
    [onBack, onClose, onContinue]
  );
  return (
    <>
      {showModal ? (
        <Modal {...props}>Evviva</Modal>
      ) : (
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      )}
    </>
  );
}
