import React, { useState } from 'react';

// zainportowac z types
interface ThemeContextInterface {
  isDarkTheme: boolean,
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  isDarkTheme: false,
  setDarkTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
