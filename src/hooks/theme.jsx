import React, { createContext } from 'react';

export const themeModes = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const ThemeContext = createContext({
  theme: themeModes.LIGHT,
  toggleTheme: () => {},
});
