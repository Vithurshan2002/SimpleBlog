import React from "react";
import PostList from "./PostList";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const [posts, setposts] = useState([]);
  const [categories, setcategories] = useState([]);

  const getPosts = () => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((posts) => {
        setposts(posts.data);
        console.log(posts.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getcategories = () => {
    axios
      .get("http://localhost:8000/maincategory/category")
      .then((category) => {
        setcategories(category.data);
        console.log(category.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getPosts();
    getcategories();
  }, []);

  return (
    <div className="pt-5 flex flex-col md:flex-row px-10 gap-10">
      <div className="flex-1 ">
        <h1 className="font-bold text-4xl">Latest Posts</h1>
        {posts.map((post, key) => {
          return <PostList key={key} data={post} />;
        })}
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
            {categories.map((category) => (
              <a href="#" className="hover:underline">
                {category.name}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
