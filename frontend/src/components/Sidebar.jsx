import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const SidebarLinks = [
    { name: "Dashboard", to: "/profile" },
    { name: "Favourites", to: "/profile/fav" },
    { name: "Liked Blogs", to: "/profile/liked-blogs" },
  ];

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="sm:hidden flex justify-end p-2">
        <button onClick={() => setOpen((prev) => !prev)} aria-label="Menu">
          {/* Hamburger Icon */}
          <svg width="32" height="32" fill="currentColor">
            <rect width="100%" height="5" y="4" rx="2" />
            <rect width="100%" height="5" y="14" rx="2" />
            <rect width="100%" height="5" y="24" rx="2" />
          </svg>
        </button>
      </div>
      {/* Sidebar links */}
      <nav
        className={`${
          open ? "block" : "hidden"
        } sm:block bg-white border-r w-full sm:w-48 flex-col gap-2 px-4 py-4 sm:py-8 sm:px-2 sm:gap-6 fixed top-14 left-0 z-20 sm:static sm:top-auto sm:left-auto transition-all duration-300`}
      >
        {SidebarLinks.map((items, i) => (
          <Link
            to={items.to}
            key={i}
            className="block py-2 text-center sm:text-left w-full hover:font-semibold"
            onClick={() => setOpen(false)} // close on navigation
          >
            {items.name}
          </Link>
        ))}
        <button className="bg-zinc-700 text-white rounded py-2 px-6 w-full sm:w-auto mt-2 hover:bg-black transition-all duration-300">
          Logout
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
