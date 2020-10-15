import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  return { ...ctx };
};
