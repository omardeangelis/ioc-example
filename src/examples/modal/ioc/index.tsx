import React from "react";
import {
  Modal,
  ModalBackButton,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./components";

export const IoCModal = () => {
  const [showModal, setShowModal] = React.useState(true);
  const onClose = React.useCallback(() => setShowModal(false), []);
  const onBack = React.useCallback(() => setShowModal(false), []);
  const onContinue = React.useCallback(() => setShowModal(false), []);
  if (showModal)
    return (
      <Modal onClose={onClose}>
        <ModalContent>
          <ModalHeader>
            <ModalBackButton onBack={onBack} />
            <ModalCloseButton />
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalBody>Evviva</ModalBody>
          <ModalFooter>
            <button onClick={onContinue}>Ok</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  return <button onClick={() => setShowModal(true)}>Show Modal</button>;
};
