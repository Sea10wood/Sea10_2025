import React, { useState } from "react";

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center relative z-20">
      <h1 className="text-2xl font-bold">Sea10&apos;s room</h1>
      <div className="flex items-center space-x-4">
      <button
          onClick={toggleDarkMode}
          className={`p-2 border rounded bg-gray-200 dark:bg-gray-700 text-sm flex items-center ${
            isDarkMode ? 'text-black' : 'text-gray-800'
          }`}
        >
          {isDarkMode ? '🌙' : '🌞'}
        </button>

        <button
          type="button"
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div
          className="md:hidden bg-gray-700 absolute top-full right-0 w-1/3 z-10 mt-0 transition-all duration-300 ease-in-out"
          style={{
            transform: isOpen ? "scale(1)" : "scale(0)",
          }}
        >
          <a
            href="#whoami"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Who am I
          </a>
          <a
            href="#blog"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            SNS
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
