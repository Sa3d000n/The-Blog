import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  return (
    <div>
      <label
        htmlFor="DarkModeToggle"
        className="relative block h-8 w-14 rounded-full bg-red transition-colors  dark:bg-yellow-500 bg-gray-900"
      >
        <input
          type="checkbox"
          id="DarkModeToggle"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="peer sr-only"
        />
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} className="ml-1.5 size-5 mt-1.5 " />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="pl-7  size-5 mt-1.5 text-white" />
        )}
        <span className="absolute inset-y-0 start-0 m-1 grid size-6 place-content-center rounded-full bg-white text-gray-700 transition-[inset-inline-start] peer-checked:start-6 peer-checked:*:first:hidden *:last:hidden peer-checked:*:last:block dark:bg-gray-900 dark:text-gray-200">
          {/* Light Mode Icon */}
        </span>
      </label>
    </div>
  );
}
