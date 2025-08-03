import React from "react";
import { Link } from "react-router-dom"; // Make sure you import Link

const Categories = () => {
  const cat = [
    { name: "DSA", to: "/cat/dsa" },
    { name: "MERN Stack", to: "/cat/dsa" },
    { name: "Next JS", to: "/cat/next-js" },
    { name: "Ruby", to: "/cat/ruby" },
    { name: "Trending Topics", to: "/cat/trending-topics" },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Categories</h1>
      <div className="flex items-center justify-start">
        {cat.map((items, i) => {
          return (
            <Link className="me-4 px-4 py-2 text-2xl" key={i} to={items.to}>
              {items.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
