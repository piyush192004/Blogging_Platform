import React from "react";
import doc8 from "../assets/doc8.png";
import photo from "../assets/BikesHelmets90.png";
import { Link } from "react-router-dom";

const EditBlogs = () => {
  const data = [
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet LoremLorem ipsum, dolor sit amet...",
    },
  ];

  // Dummy handlers
  const handleDelete = (index) => {
    alert(`Delete blog at index ${index}`);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
        Edit Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow p-4 flex flex-col h-full"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm flex-grow leading-relaxed mb-4">
              {item.desc}
            </p>
            <div className="flex flex-col gap-2 items-center justify-center sm:flex-row mt-auto">
              <Link
                to={`/admin-dashboard/update-blog/${index}`} // Ideally use a UNIQUE id if available
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded text-center transition"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded text-center transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditBlogs;
