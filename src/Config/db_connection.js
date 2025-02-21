// Import the mongoose library to interact with MongoDB
const mongoose = require("mongoose");
// Import the dotenv library to load environment variables from a .env file 
require("dotenv").config();
// Retrieve the MongoDB connection URI from the environment variables
const mongoURI = process.env.db_url;

const connectDB = async ()=>{
    try{
        await mongoose.connect(mongoURI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MonogoDB connected")

    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;