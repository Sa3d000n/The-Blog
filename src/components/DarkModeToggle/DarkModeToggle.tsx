import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div>
      <label
        htmlFor="DarkModeToggle"
        className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors has-checked:bg-green-500 dark:bg-gray-600 dark:has-checked:bg-green-600"
      >
        <input
          type="checkbox"
          id="DarkModeToggle"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="peer sr-only"
        />
        {darkMode ? (
          <FontAwesomeIcon icon={faMoon} className="ml-1.5 size-5 mt-1.5 " />
        ) : (
          <FontAwesomeIcon icon={faSun} className="pl-7  size-5 mt-1.5 " />
        )}
        <span className="absolute inset-y-0 start-0 m-1 grid size-6 place-content-center rounded-full bg-white text-gray-700 transition-[inset-inline-start] peer-checked:start-6 peer-checked:*:first:hidden *:last:hidden peer-checked:*:last:block dark:bg-gray-900 dark:text-gray-200">
          {/* Light Mode Icon */}
        </span>
      </label>
    </div>
  );
}
