import { useContext } from 'react';
import { ModalContext } from '../context/modalContext';

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  return { ...ctx };
};
