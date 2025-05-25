import React from "react";
import BACKUP from "./images/a.png";
import { NavLink } from "react-router-dom";
const PostList = ({ data }) => {
  const Img = data.image || BACKUP;
  return (
    <div className="flex  border my-5">
      <div className="bg-gray-300 flex-1/4">
        <img src={Img} alt="no image" />
      </div>
      <div className="ps-5  py-2 flex-3/4">
        <h1 className="font-semibold">{data.title}</h1>
        <p className="py-1 line-clamp-2">{data.content}</p>
        <button  className="bg-blue-500 px-1.5 font-bold rounded-full text-white hover:cursor-pointer hover:text-green-700  ">
       <NavLink to={`/posts/${data._id}`}> Read More</NavLink>  
        </button>
      </div>
    </div>
  );
};

export default PostList;
