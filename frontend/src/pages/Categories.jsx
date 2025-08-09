import React from "react";
import doc8 from "../assets/doc8.png";
import photo from "../assets/BikesHelmets90.png";
import BlogCard from "../components/BlogCard";

const Categories = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.map((items, i) => (
        <BlogCard
          key={i}
          img={items.img}
          title={items.title}
          desc={items.desc}
        />
      ))}
    </div>
  );
};

export default Categories;
