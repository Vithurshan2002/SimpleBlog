import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BACKUP from "./images/a.png";
const Postdetails = () => {
  const { id } = useParams();

  
  const [singlepost, setsinglepost] = useState(null);

  const getData = () => {
    axios
      .get(`http://localhost:8000/api/post/${id}`)
      .then((data) => {
        setsinglepost(data.data.data);
        console.log(data.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getData() 
  }, [id]);




  if(!singlepost){
    return <p>Loading.....</p>
  }

  return (
    <div className="my-10 flex flex-col md:flex-row mx-10 space-x-5 ">
      <div className="flex-3/4 border-2 border-dashed p-2" >
        <h1 className="font-bold text-4xl">{singlepost.title}</h1>
        <p className="py-2"> by <a href="#" className="text-blue-700">{singlepost.author}</a></p>
        <div className="w-full h-[250px] bg-gray-300"><img src={singlepost.image} alt="no image" /></div>
        <p className="py-4">
         {singlepost.content}
        </p>
      </div>
      <div className="flex-1/4 md:py-0 sm:py-10">
        <h1 className="font-semibold text-xl mb-2 ">Related Post</h1>
        <div className="flex flex-col md:flex-row  space-x-4">
          <div className="w-[50px] bg-gray-300 flex-1/4"></div>
          <div className="flex-3/4 ">
            <h1 className="text-blue-500 font-semibold text-xl ">
              Related Post1
            </h1>
            <p className="text-sm py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              rem beatae sapiente. Nihil, eos officia.
            </p>
          </div>
          <div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postdetails;
