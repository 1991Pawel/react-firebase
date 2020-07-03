import React, { useState } from 'react';

// zainportowac z types
interface ModalContextInterface {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = React.createContext<ModalContextInterface>({
  isModalOpen: false,
  setModalOpen: () => {},
});

export const ModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
