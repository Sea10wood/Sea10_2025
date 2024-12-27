import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center relative z-20">
      <h1 className="text-2xl font-bold">Sea10's room</h1>
      <nav className="hidden md:flex space-x-6">
        <a href="#whoami" className="hover:text-gray-300">
          Who am I
        </a>
        <a href="#blog" className="hover:text-gray-300">
          SNS
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
      </nav>
      <button
        type="button"
        className="md:hidden text-2xl z-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

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
