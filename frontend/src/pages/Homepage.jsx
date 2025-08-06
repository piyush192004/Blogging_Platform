import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories.jsx";
import RecentBlogs from "../components/RecentBlogs.jsx";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Categories />
      <RecentBlogs />
    </div>
  );
};

export default Homepage;
