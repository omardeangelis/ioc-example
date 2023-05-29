import { ComponentWithChildren } from "../types";

export const ModalContent: ComponentWithChildren = ({ children }) => {
  return <div className="modal-content">{children}</div>;
};
