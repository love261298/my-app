import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

function Context({ children }) {
  const [auth, setAuth] = useState(localStorage.getItem('token'));
  const [edit, setEdit] = useState(false);
  const [popupSerImage, setPopupSerImage] = useState(false);  
  return (
    <ThemeContext.Provider
      value={{ auth, setAuth, edit, setEdit, popupSerImage, setPopupSerImage}}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default Context;
