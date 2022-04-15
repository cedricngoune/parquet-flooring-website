import React from "react";

interface IModalProps {
  isOpen: boolean;
  onClose: void;
  children: any;
}

const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  return (
    <div className="relative w-full h-full">
      <div className="flex "></div>
    </div>
  );
};

export default Modal;
