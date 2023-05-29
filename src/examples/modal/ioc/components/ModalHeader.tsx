import React from "react";

type ModalHeaderProps = {
  children: React.ReactNode;
  hasBorder?: true;
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  hasBorder,
}) => {
  return (
    <div
      className="modal-header"
      style={{
        borderBottom: hasBorder ? "1px solid #ccc" : "none",
      }}
    >
      {children}
    </div>
  );
};
