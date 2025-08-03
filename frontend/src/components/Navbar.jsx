import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "All Blogs", to: "/all-blogs" },
    { name: "Profile", to: "/profile" },
    { name: "Login", to: "/login" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 border-b border-zinc-200 px-4">
      <div className="w-2/6 brandName">
        <Link to="/" className="text-xl font-bold">
          Blogger's Heaven
        </Link>
      </div>
      {/* Desktop links */}
      <div className="w-4/6 hidden lg:flex items-center justify-end">
        {links.map((item, i) => (
          <Link
            className="ms-4 hover:text-blue-600 transition-all duration-300"
            key={i}
            to={item.to}
          >
            {item.name}
          </Link>
        ))}
        <Link
          className="ms-4 bg-black rounded px-4 py-1 text-zinc-100 hover:bg-blue-600 transition-all duration-300"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
      {/* Hamburger on mobile, using react-icons */}
      <button
        className="lg:hidden text-3xl z-50 p-2 rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`
          lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center
          gap-6 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ transitionProperty: "transform" }}
      >
        {links.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="text-xl font-semibold hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/signup"
          className="bg-black rounded px-4 py-2 text-zinc-100 hover:bg-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
