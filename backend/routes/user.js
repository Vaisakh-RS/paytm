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
            const newUser=await User.create({
                username:userDetails.username,
                firstName:userDetails.firstName,
                lastName:userDetails.lastName,
                password:userDetails.password

            })
            const token=jwt.sign({
                id:newUser._id
            },JWT_SECRET)

            res.status(200).json({
                message:"User created successfully",
                token:token
            })
        }
    }
});



const signinBody=z.object({
    username:z.string().email(),
    password:z.string()
});

router.post("/sigin",(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    const result=signinBody.safeParse({username,password})
    if(!result.success)
    {
        return res.status(411).json({message:"Invalid user input"})
    }

    const user=User.findOne({username,password})
    if(user)
    {   
        const token=jwt.sign({
            id:user._id
        },JWT_SECRET)
    
        res.status(200).json({
            token:token
        })
        return
    }
   

    res.status(411).json({message:"Error signing in"})

})


module.exports=router