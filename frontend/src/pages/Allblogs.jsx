import React from "react";
import BlogCard from "../components/BlogCard";
import doc8 from "../assets/doc8.png";
import photo from "../assets/BikesHelmets90.png";

const Allblogs = () => {
  const data = [
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet...",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet...",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <BlogCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Allblogs;
