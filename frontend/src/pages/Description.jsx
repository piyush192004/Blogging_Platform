import React from "react";
import photo from "../assets/BikesHelmets90.png";
const Description = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Lorem Ipsum Heading</h1>
      <img
        className="mt-4 w-full h-[600px] object-cover rounded"
        src={photo}
        alt="blog-image"
      />
      <p className="mt-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum
        aliquid dicta sunt aspernatur mollitia cum qui, architecto nulla
        inventore quam natus explicabo voluptates! Officia, impedit rem.
        Temporibus, ea consequatur. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Doloremque, sapiente illum eligendi aperiam reiciendis
        totam nam modi odit provident placeat accusamus aliquam commodi
        voluptatum repellendus alias laboriosam veniam blanditiis quidem? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Esse natus non
        molestias quo doloribus voluptate aspernatur repudiandae sint expedita,
        consequatur hic eveniet beatae quibusdam nihil veniam dolore
        voluptatibus. Blanditiis, odio. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Non excepturi accusamus aspernatur, laudantium nulla
        tempora dignissimos! Amet quae fugit atque consequatur voluptatem ullam
        delectus in! Illum excepturi voluptatem nobis explicabo.
      </p>
    </div>
  );
};

export default Description;
