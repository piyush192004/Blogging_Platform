import React from "react";

const UpdateBlogs = () => {
  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Update Blog</h1>
      <form action="" className="flex flex-col gap-6 max-w-3xl w-full mx-auto">
        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          className="font-semibold text-lg md:text-2xl border-b border-zinc-500 outline-none p-3 bg-transparent w-full"
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          rows="5"
          className="font-semibold text-base md:text-xl border-b border-zinc-500 outline-none p-3 bg-transparent w-full resize-none"
        />

        {/* File Upload */}
        <div>
          <label className="block font-medium mb-2">Upload Image</label>
          <input
            type="file"
            className="bg-zinc-900 rounded text-white p-2 w-full sm:w-auto"
            accept=".jpeg, .jpg, .png"
          />
        </div>

        {/* Button */}
        <button className="bg-blue-500 hover:scale-105 transition-all duration-300 hover:bg-blue-700 text-white text-lg md:text-xl shadow-xl rounded px-6 py-2 w-full sm:w-auto">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlogs;
