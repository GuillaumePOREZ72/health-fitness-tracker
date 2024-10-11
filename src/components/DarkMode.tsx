"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLocalStorage } from "react-use";

/**
 * A button that toggles the app's color scheme between light and dark. The
 * preference is stored in local storage as "dark-mode".
 *
 * @returns A div containing a Moon or Sun icon that can be clicked to toggle
 *   the color scheme.
 */
const DarkMode = () => {
  const [dark, setDark] = useState(false);
  const [value, setValue] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    if (value) setDark(value);
  }, [value]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = window.document.body; // Changed from documentElement to body
      if (dark) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    }
    setValue(dark);
  }, [dark, setValue]);

  return (
    <div onClick={() => setDark(!dark)}>
      {dark ? (
        <Sun className="h-[1.5rem] w-[1.5rem]" />
      ) : (
        <Moon className="h-[1.5rem] w-[1.5rem]" />
      )}
    </div>
  );
};

export default DarkMode;
