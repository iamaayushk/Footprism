const express= require('express')
// const app= express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const cookieParser = require("cookie-parser");
const CarbonCalculation= require('../models/carbonLog')
// app.use(cookieParser());
// app.use(express.json());


// signup Page
exports.signup = async(req, res)=>{
    const {name, email, password}= req.body;

    try{
        const userExists= await User.findOne({email});
        if(userExists){
            return res.status(400).json({msg:"User Already exists"});
        }
        const hashedPass= await bcrypt.hash(password,10);

        const newUser= await User.create({
            name,
            email,
            password:hashedPass,
        });

        const token= jwt.sign({id: newUser._id}, "mysecretkey", {expiresIn:"1d"});
        res.status(201).json({name: newUser.name,email:newUser.email, token, user:{id:newUser._id}, });
    }
    catch(err){
        res.status(500).json({msg:"Internal server error"});
    }
}

// login page
exports.login = async (req,res)=>{
    const {email,password}= req.body;

    try{
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({msg:"No user found"});
    }

    const isMatch= await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({msg:"Invalid password"});
    }
    const token = jwt.sign({id: user._id}, "mysecretkey", {expiresIn:"1d"});
    res.cookie("token", token,{
        httpOnly:true,
        secure: true,
        sameSite:"strict",
        maxAge: 24*60*60*1000,
    }).json({msg:"Login Successfully", user:{id: user._id,name:user.name, email: user.email}})
}
catch(err){
    return res.status(500).json({msg:"Internal server error"});
}
};
// logout page
exports.logout= async(req,res)=>{
    try{
        res.clearCookie("token",{
        httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax'
    });
    res.status(200).json({msg:"Logged out successfully"})
}
catch(err){
    console.log("error", err);
    
}
}

exports.me = async(req, res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({msg:"Not authenticated"})
    }

    try{
        const decoded = jwt.verify(token,"mysecretkey")
        const user= await User.findById(decoded.id)

        if(!user){
            return res.status(404).json({ msg: "User not found" });
        }
        res.json({user });
    }
    catch(err){
        return res.status(401).json({msg:"Invalid Token"})
    }
}

// Carbon Calculator
exports.carbonCalculator = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const existing = await CarbonCalculation.findOne({
      userId,
      timestamp: { $gte: startOfToday }
    });

    if (existing) {
      return res.status(400).json({ message: "You have already submitted today's data." });
    }

    const newEntry = new CarbonCalculation({
      userId,
      ...req.body,
      timestamp: new Date()
    });

    await newEntry.save();
    return res.status(201).json({ message: "Carbon data logged successfully." });

  } catch (err) {
    console.error("Error in carbonCalculator:", err);
    return res.status(500).json({ message: "Internal server error." });
  }
};


// routes/user.js
exports.checklog= async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const alreadyLogged = await CarbonCalculation.findOne({
      userId: req.user.id,
      timestamp: { $gte: startOfDay }
    });

    if (alreadyLogged) {
      return res.json({ hasLogged: true });
    } else {
      return res.json({ hasLogged: false });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};


// get carbon data 
exports.getCarbonData = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = await CarbonCalculation.find({ user: userId }).sort({ timestamp: 1 });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Failed to fetch carbon data" });
  }
};
