import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

function Context({ children }) {
  const [auth, setAuth] = useState(false);
  return <ThemeContext.Provider value={{ auth, setAuth }}>{children}</ThemeContext.Provider>;
}

export default Context;
