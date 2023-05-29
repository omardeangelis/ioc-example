export const ModalOverlay: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  return <div className="modal-overlay" onClick={onClick} />;
};
