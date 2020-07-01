import React, { useState } from 'react';

interface ModalContextInterface {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = React.createContext<ModalContextInterface>({
  isOpen: false,
  setIsOpen: () => {},
});

export const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
