require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const bp=require('body-parser');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(bp.urlencoded({extended:true}));
app.use(express.json());
const postRoute=require('./routes/post');
const categoryRoute=require("./routes/category");
app.use('/api',postRoute);
app.use('/maincategory',categoryRoute);
app.listen(process.env.PORT||3000,()=>{
    console.log(`server is Listning in the port ${process.env.PORT}`)
});


mongoose.connect('mongodb://localhost:27017/MYBLOG')
.then(()=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log("error in connecting to mongoDB");
    console.log(err);
});

