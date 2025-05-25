const express = require("express");
const router = express.Router();
const category = require("../models/Category");

//get all routes
router.get("/category", async (req, res) => {
  try {
    const data = await category.find();
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get a single catecory
router.get("/category/:id", async (req, res) => {
  try {
    const data = await category.findById(req.params.id);
    if (data) {
      res.status(200).json({"data":data});
    } else {
      return res.status(404).json({ message: "NotFound" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//create a new category
router.post("/addcategory", async (req, res) => {
  try {
    const { name, slug, description} = req.body;
    const data = await category.create({
      name: name, 
      slug: slug,
      description: description,
    });
    res.status(200).json({ "messgae":data });
  } catch (error) {
    res.status(400).json({ "message": "Cannot Store the data" });
  }
});



//updating a category
router.put("/category/:id", async (req, res) => {
  try {
    const data = await category.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: " category NotFound" });
    }
    data.name=req.body.name || data.name;
    data.slug=req.body.slug|| data.slug;
    data.description=req.body.description || data.description;
    data.updatedAt=Date.now();
    const updateddata=await data.save();
    res.status(200).json({"data":updateddata});

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//delete a post
router.delete("/category/:id", async (req, res) => {
  try {
    const data = await category.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "category NotFound" });
    }
    res.status(200).json({'message':"category is deleted"})
  } catch (error) {
    res.status(500).json({ "message": error.message });
  }
});


module.exports = router;

