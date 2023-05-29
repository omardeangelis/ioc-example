import { ComponentWithChildren } from "../types";

export const ModalFooter: ComponentWithChildren = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};
