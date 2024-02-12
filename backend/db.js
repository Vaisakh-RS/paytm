const mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)
.catch(err=>console.log(err))

//Creating a user schema

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        lowercase:true,
        minLength:3,
        maxLength:30,
        trim:true
    },
    lastname:{
        type:String,
        lowercase:true,
        maxLength:30,
        trim:true
    },
    username:
    {
        type:String,
        required:true,
        lowercase:true,
        minLength:3,
        maxLength:30,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        trim:true
    }})

const User=mongoose.model("User",userSchema);

module.exports=User