import React, { createContext, useState, useContext, useEffect } from "react";

/**
 * ThemeContext.tsx
 *
 * This file defines a React context for managing a theme (light or dark) across an application.
 *
 * Types:
 * - Theme: A union type representing the possible themes ("light" or "dark").
 * - ThemeContextType: An interface defining the shape of the context value, which includes the current theme and a function to toggle the theme.
 *
 * Components:
 * - ThemeProvider: A React component that provides the theme context to its children. It manages the theme state and persists it in localStorage.
 *
 * Hooks:
 * - useTheme: A custom hook that provides access to the theme context. It throws an error if used outside of a ThemeProvider.
 *
 * The ThemeProvider component:
 * - Initializes the theme state to "light".
 * - Checks localStorage for a saved theme and applies it if available.
 * - Listens for changes in the theme state and updates the document's class list and localStorage accordingly.
 * - Provides a toggleTheme function to switch between "light" and "dark" themes.
 */

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
