import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, desc, img }) => (
  <div className="flex flex-col bg-white rounded shadow p-4 w-72 mx-auto">
    {/* Image on top */}
    <div>
      {img ? (
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-44 rounded mb-4"
        />
      ) : (
        <div className="w-full h-44 rounded bg-gray-200 flex items-center justify-center text-gray-500 mb-4">
          No Image
        </div>
      )}
    </div>
    <h1 className="text-xl font-semibold">{title}</h1>
    <p className="mt-2 mb-4 text-gray-600">{desc.slice(0, 200)}...</p>
    <Link
      to="/description/48569"
      className="mt-auto bg-blue-500 px-4 py-2 rounded text-white text-center cursor-pointer hover:bg-black transition-all duration-300"
    >
      Read Blog
    </Link>
  </div>
);

export default BlogCard;
