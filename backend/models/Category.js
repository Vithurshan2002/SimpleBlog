const mongoose = require("mongoose");
const categoryschema=new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },


},{
    timestamps:true   // to create createdat updatedat automaticallyyy .this is the shortway
});

const category=mongoose.model('category',categoryschema);

module.exports=category;