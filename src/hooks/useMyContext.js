import { createContext, useContext, useState } from 'react';

export const UserCtx = createContext();

export const useUserCtx = () => useContext(UserCtx);

export const UserProvider = ({ children }) => {
  const [isLogined, setIsLogined] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = () => {
    setIsLogined(true);
    setUsername('Alex');
  };

  const logOut = () => {
    setIsLogined(false);
    setUsername(null);
  };

  return (
    <UserCtx.Provider value={{ isLogined, username, logIn, logOut }}>
      {children}
    </UserCtx.Provider>
  );
};
