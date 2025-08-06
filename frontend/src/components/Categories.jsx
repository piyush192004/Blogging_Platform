import React from "react";
import { Link } from "react-router-dom";

// Array now includes a hoverBg property for each category.
const cat = [
  {
    name: "DSA",
    to: "/cat/dsa",
    bg: "bg-green-200",
    hoverBg: "hover:bg-green-400",
  },
  {
    name: "MERN Stack",
    to: "/cat/mern-stack",
    bg: "bg-pink-200",
    hoverBg: "hover:bg-pink-400",
  },
  {
    name: "Next JS",
    to: "/cat/next-js",
    bg: "bg-indigo-200",
    hoverBg: "hover:bg-indigo-400",
  },
  {
    name: "Trending Topics",
    to: "/cat/trending-topics",
    bg: "bg-zinc-200",
    hoverBg: "hover:bg-zinc-400",
  },
];

const Categories = () => {
  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cat.map((items, i) => (
          <Link
            className={`px-4 py-2 text-center text-normal md:text-xl font-semibold ${items.bg} ${items.hoverBg} transition-all duration-300 rounded`}
            key={i}
            to={items.to}
          >
            {items.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
