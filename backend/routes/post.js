const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const { useParams } = require("react-router-dom");

//get all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

//get a single post
router.get("/post/:id", async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      return res.status(404).json({ message: "NotFound" });
    }
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

//create a new Post
router.post("/addpost", async (req, res) => {
  try {
    const { title, content, category, author, image } = req.body;
    const data = await Post.create({
      title: title,
      content: content,
      category: category,
      author: author,
      image: image,
    });
    res.json(200).json({ data });
  } catch (error) {
    res.json(400).json({ message: "Cannot Store the data" });
  }
});

//updating a post
router.put("/post/:id", async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: " POst NotFound" });
    }
    data.title=req.body.title || data.title;
    data.content=req.body.content|| data.content;
    data.category=req.body.category || data.category;
    data.author=req.body.author || data.author;
    data.image=req.body.image || data.image;
    data.updatedAt=DATE.now();

    const updateddata=await post.save();
    res.json(200).json(updateddata);

  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});


//delete a post
router.delete("/post/:id", async (req, res) => {
  try {
    const data = await Post.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: " POst NotFound" });
    }
    res.status(200).json({'message':"post is deleted"})

  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
