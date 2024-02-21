const express=require("express")
const z=require('zod')
const router=express.Router()
const {User,Account}=require('../db')
const { JWT_SECRET } = require("../config")
const jwt=require('jsonwebtoken')
const authMiddleware=require('../middleware')


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
                password:userDetails.password,
            })

            const userId=newUser._id
            //create account for the user and intialize it with a random amount
            await Account.create({
                userId,
                balance:Math.random()*10000+1
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

router.post("/signin",(req,res)=>{
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
    
        // res.status(200).json({
        //     token:token
        // })
        return res.redirect("../frontend/src/pages/Dashboard")
    }
   

    res.status(411).json({message:"Error signing in"})

});

const updateBody=z.object({
    firstName:z.string().optional(),
    lastName:z.string().optional(),
    password:z.string().optional()
});

//to update details
router.put("/",authMiddleware,async(req,res)=>{

    const updateDetails=req.body;
    const result=updateBody.safeParse(updateDetails)
    if(!result.success)
    {
        return res.status(411).json({message:"Error while updating information"})
    }

    await User.updateOne({_id:req.id},updateDetails)

    res.json({message:"Details updated successfully"})


});

//to filter users and send them money

router.get("/bulk",async(req,res)=>{

    const serachVal=req.query.filter||" "
    const users=await User.find({
        $or:[
            {firstName:{
                "$regex":serachVal
            }},
            {lastName:{
                "$regex":serachVal
            }}
        ]
    })

    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            id:user._id
        }))
    })
    
})


module.exports=router