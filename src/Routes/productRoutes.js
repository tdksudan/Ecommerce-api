const express = require('express');
const Product = require('../Models/Product');

const router = express.Router();

// Get all products
router.get('/',async (req, res ) => { 
  try{
    const products = await Product.find();
    res.json(products);
  }catch(err) {
    res.status(500).json({message:err.message});
  }
});

// Create a product 
router.post("/", async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }catch (err){
        res.status(500).json({message:err.message});
    }
});

model.exports = router;
