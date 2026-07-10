import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [dark, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const ToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ dark,ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
