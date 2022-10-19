import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [savedValue, setSavedValue] = useLocalStorage("theme", "dark");

  const isDarkTheme = savedValue === "dark";

  const toggleTheme = () => {
    setSavedValue(isDarkTheme ? "light" : "dark");
  };

  return (
    <StateContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
