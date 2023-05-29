import { BiArrowBack, BiWindowClose } from "react-icons/bi";
import { useModalContext } from "../context/ModalContext";

export const ModalCloseButton = () => {
  const { onClose } = useModalContext();
  return (
    <div className="modal-close-btn">
      <BiWindowClose onClick={onClose} />
    </div>
  );
};

export const ModalBackButton: React.FC<{ onBack: () => void }> = ({
  onBack,
}) => {
  return (
    <div className="modal-back-btn">
      <BiArrowBack onClick={onBack} />
    </div>
  );
};
