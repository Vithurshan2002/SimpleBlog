import React from "react";

const Home = () => {
  return (
    <div className="pt-5 flex flex-col md:flex-row px-10 gap-10">
      <div className="flex-1">
        <h1 className="font-bold text-4xl">Latest Posts</h1>
        <div className="flex border my-5">
          <div className="w-25 h-25 bg-gray-300"></div>
          <div className="ps-5">
            <h1 className="font-semibold">Post Title 1</h1>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-blue-500 px-1.5 font-bold rounded-full text-white hover:cursor-pointer hover:text-green-700  ">
              Read More
            </button>
          </div>
        </div>
        <div className="flex border my-5">
          <div className="w-25 h-25 bg-gray-300"></div>
          <div className="ps-5">
            <h1 className="font-semibold">Post Title 1</h1>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-blue-500 px-1.5 font-bold rounded-full text-white hover:cursor-pointer hover:bg-blue-300 hover:text-green-700  ">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="border p-3">
          <h1 className="font-bold">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            magnam?
          </p>
        </div>
        <div className="border mt-10 p-3 mb-20 ">
          <h1 className="font-semibold py-2 text-xl">Categories</h1>
          <p className="py-2">
            <a href="" className="hover:underline ">Category 1</a>
          </p>
          <p className="py-2">
            <a href="" className="hover:underline">Category 2</a>
          </p>
          <p className="py-2">
            <a href="" className="hover:underline">Category 3</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
