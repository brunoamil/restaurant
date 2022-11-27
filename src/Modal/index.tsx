import { ReactNode, useEffect, useState } from "react";

import ModalReact from "react-modal";

interface modalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Modal = ({ children, isOpen, setIsOpen }: modalProps) => {
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    if(modalStatus !== isOpen) {
        setModalStatus(isOpen);
    }
  }, [modalStatus, isOpen]);

  return (
    <ModalReact 
    shouldCloseOnOverlayClick={!false}
    onRequestClose={setIsOpen}
    isOpen={modalStatus} 
    ariaHideApp={false}
    style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ModalReact>
  );
};
