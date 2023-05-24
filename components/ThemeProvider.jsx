import React, { createContext, useState } from "react";

const lightTheme = {
  primaryColor: "blue",
  secondaryColor: "gray",
  textColor: "white",
};

const darkTheme = {
  primaryColor: "orange",
  secondaryColor: "darkgray",
  textColor: "white",
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme); // Varsayılan tema

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
