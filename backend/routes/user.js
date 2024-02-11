const express=require("express")
const z=require('zod')
const router=express.Router()
const User=require('../db')
const { JWT_SECRET } = require("../config")
const jwt=require('jsonwebtoken')

const userValidation=z.object({
    username:z.string().email(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string()
})

router.post("/signup",async(req,res)=>{

    const userDetails=req.body
    const result=userValidation.safeParse(userDetails)
    if(!result.success)
    {
        res.status(411).json({"msg":"Invalid user input"})
    }
    else{
        const user=await User.findOne({username:userDetails.username})
        if(user)
        {
            res.status(411).json({"msg":"Username already exists"})
        }
        else{
            const newUser=await User.create(userDetails)
            const token=jwt.sign({
                id:newUser._id
            },JWT_SECRET)
            
            res.status(200).json({
                message:"User created successfully",
                token:token
            })
        }
    }
})


module.exports=router