const mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)
.catch(err=>console.log(err))

//Creating a user schema

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30,
        trim:true
    },
    lastName:{
        type:String,
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

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, //References userID from user table
        ref:"User",
        required:true
    },
    
    balance:{
        type:Number,
        required:true
    },
    
})

const User=mongoose.model("User",userSchema);
const Account=mongoose.model("Account",accountSchema)

module.exports={User,Account}