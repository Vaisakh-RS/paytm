const express=require("express")
const router=express.Router()
const {Account}=require('../db')
const authMiddleware = require("../middleware");
const { default: mongoose } = require("mongoose");

router.get("/balance",authMiddleware,async(req,res)=>{
    
    const account=await Account.findOne({userId:req.body.userId})
    return res.status(200).json({"balance":account.balance})
});


//to transfer the money (implemnt transactions within the db(i am not using it now))
router.post("/transfer",async (req,res)=>{
    // const session =await mongoose.startSession
    //session.startSession()

    const {amount,to}=req.body
    const senderAccount=await Account.findOne({userId:req.body.userId})
    
    if (senderAccount.balance<amount)
    {
        await session.abortTransaction()
        return res.status(400).json({message:"Insufficient balance"})
    }

    const toAccount=await Account.findOne({userId:to})
    if(!toAccount)
    {
        
        return res.status(400).json({message:"Invalid account"})
    }
    await Account.updateOne({
        userId:req.userId
    },{
        $inc:{
            balance:-amount
        }
    })

    await Account.updateOne({
        userId:to
    },{
        $inc:{
            balance:amount
        }
    })

    //commit the transaction
    
    res.json({
        message:"Transaction successful"
    })

})

module.exports=router

