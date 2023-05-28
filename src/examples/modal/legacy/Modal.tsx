import { ModalOverlay } from "./ModalOverlay";
import { BiArrowBack, BiWindowClose } from "react-icons/bi";

type LegacyModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  onBack: () => void;
  onContinue: () => void;
  modalTitle?: string;
};

export const Modal: React.FC<LegacyModalProps> = ({
  children,
  onClose,
  onBack,
  onContinue,
  modalTitle,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-back-btn">
            <BiArrowBack onClick={onClose} />
          </div>
          {modalTitle ? <div className="modal-title">Modal Title</div> : null}
          <div className="modal-close-btn">
            <BiWindowClose onClick={onBack} />
          </div>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button onClick={onContinue}>Ok</button>
        </div>
      </div>
      <ModalOverlay />
    </div>
  );
};
