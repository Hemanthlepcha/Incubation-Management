import { createContext, useState } from "react";

export const StartContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const StartContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const contextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <StartContext.Provider value={contextValue}>{children}</StartContext.Provider>
  );
};
