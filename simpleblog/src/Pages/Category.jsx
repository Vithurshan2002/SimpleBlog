import React from "react";
import PostList from "./PostList";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const [posts, setposts] = useState([]);
  const [category, setcategory] = useState(null);
  const { id } = useParams();
  const getPosts = () => {
    axios
      .get(`http://localhost:8000/api/category/${id}`)
      .then((posts) => {
        setposts(posts.data.data);
        console.log("post is", posts.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getcategories = () => {
    axios
      .get(`http://localhost:8000/maincategory/category/${id}`)
      .then((category) => {
        setcategory(category.data.data);
        console.log("category is", category.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getPosts();
    getcategories();
  }, []);

  if (!category) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="flex justify-center items-center flex-col pt-5 pb-10 px-10 ">
      <h1 className="text-4xl font-bold py-5">{category.name}</h1>
      {posts.map((post, key) => {
        return <PostList key={key} data={post} />;
      })}
    </div>
  );
};

export default Category;
