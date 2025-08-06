import React from "react";
import BlogCard from "./BlogCard";
import doc8 from "../assets/doc8.png";
import photo from "../assets/BikesHelmets90.png";
const RecentBlogs = () => {
  const data = [
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, debitis iure dicta facilis, esse odio laboriosam exercitationem voluptas asperiores quam earum quo iste sed magni beatae inventore animi doloribus quia?",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, debitis iure dicta facilis, esse odio laboriosam exercitationem voluptas asperiores quam earum quo iste sed magni beatae inventore animi doloribus quia?",
    },
    {
      img: photo,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, debitis iure dicta facilis, esse odio laboriosam exercitationem voluptas asperiores quam earum quo iste sed magni beatae inventore animi doloribus quia?",
    },
    {
      img: doc8,
      title: "Lorem Ipsum",
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, debitis iure dicta facilis, esse odio laboriosam exercitationem voluptas asperiores quam earum quo iste sed magni beatae inventore animi doloribus quia?",
    },
  ];
  return (
    <div className="mt-4 py-4">
      <h1 className="text-xl font-semibold mb-4">Recent Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((items, i) => (
          <BlogCard
            key={i}
            img={items.img}
            title={items.title}
            desc={items.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
