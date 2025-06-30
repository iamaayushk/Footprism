const express = require("express");
const app= express();
const Port=3000;
require('dotenv').config();
const dbConnect= require('./config/db');
app.use(express.json());
const cors = require("cors");
const cookieParser= require('cookie-parser');
app.use(cookieParser());  

app.use(cors({
  origin: "https://footprism.vercel.app", 
  methods:["get", "post", "put", "delete"],
  credentials: true,              
}));

const user= require('./routes/auth');
app.use('/user',user);


dbConnect();
app.listen(Port,()=>{
    console.log(`server running on port ${Port}`);
    
})


