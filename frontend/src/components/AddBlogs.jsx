import React from "react";

const AddBlogs = () => {
  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-semibold">Add Blog</h1>
      <form action="">
        <div className=" m-4 flex flex-col">
          <input
            type="text"
            placeholder="Title"
            className="font-semibold text-2xl border-b border-zinc-500 outline-none p-4 bg-transparent w-[50%]"
          />
          <textarea
            placeholder="Description"
            className="font-semibold text-xl border-b mt-4 border-zinc-500 outline-none p-4 bg-transparent w-[50%]"
          />
          <div className="m-8">
            <input
              type="file"
              className="bg-zinc-900 rounded text-white"
              accept=".jpeg, .jpg, .png"
            />
          </div>
          <button className="bg-blue-500 hover:scale-105 transition-all duration-300 hover:bg-blue-700 text-white text-xl shadow-xl rounded px-15 py-2 w-[20%]">
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
