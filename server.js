require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require('./src/Config/db_connection');

const app = express();

//Middleware 
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//connect to MongoDB

// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=> console.log("MongoDB Connected"))
// .catch (err => console.log(err),connectDB());
connectDB();

app.get("/",(req,res)=>{
    res.send("E-commerce API is running...");
})

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is runnign on port ${PORT}`));