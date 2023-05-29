import { ComponentWithChildren } from "../types";

export const ModalBody: ComponentWithChildren = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};
