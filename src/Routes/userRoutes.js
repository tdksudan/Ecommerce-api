const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../Models/User");

//Register
router.post("/register",async (req,res)=>
{
    try{
       const {name,email,password} = req.body;
       const hashedPassword = await bcrypt.hash(password,10);
       const user = await User.create({name,email,password:hashedPassword});
       res.status(201).json(user);
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

//Login
router.post("/login",async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user = await User.findone({email});
        if(!user)return res.status(400).json({message:"User not found"});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:"Invalid credentials"});

        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET,{expiresIn:"1d"});
        res.json({token,user});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports = router;