const express = require('express');
const Order = require("../Models/Order");

const router = express.Router();

//get all orders
router.get("/",async (req, res)=>{
    try{
        const orders = await Order.find().populate("user").populate('products.product')
        res.json(orders);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//Create an Order
router.post("/",async(req,res)=>{
    try{
        const order = await Order.create(req.body);
        res.status(201).json(order);
    }catch (err){
        res.status(500).json({message:err.message});
    }
});

module.exports = router;
