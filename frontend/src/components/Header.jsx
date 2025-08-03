import React from "react";
import photo from "../assets/BikesHelmets90.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <div className="text-3xl sm:text-4xl flex flex-col items-start text-center sm:text-left">
        <h1 className="font-semibold">
          Hey!! Welcome to the Heaven of the Blogger's!!
        </h1>
        <h2 className="text-lg sm:text-xl text-center w-full mt-2">
          Discover the latest blogs from all over the world
        </h2>
      </div>
      <div
        className="
        my-8 w-full 
        flex flex-col-reverse sm:flex-row 
        items-center justify-between gap-8
        max-w-5xl
      "
      >
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
          <img
            src={photo}
            alt="Temp"
            className="
              rounded w-full
              h-48 xs:h-64 sm:h-[50vh] 
              object-cover
              shadow
            "
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-bold">Lorem Ipsum</h1>
          <p className="mt-2 mb-8 text-sm sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            debitis iure dicta facilis, esse odio laboriosam exercitationem
            voluptas asperiores quam earum quo iste sed magni beatae inventore
            animi doloribus quia?
          </p>
          <Link className="mt-2 bg-blue-500 px-4 py-2 rounded text-white cursor-pointer hover:bg-black transition-all duration-300">
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
