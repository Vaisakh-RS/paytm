const express = require("express");
const rootRouter=require('./routes/index')
const cors=require('cors')
require('dotenv').config()


const app=express();
const PORT=process.env.PORT||3000

app.use(cors());
app.use(express.json())

//Routes will be like /api/v1/users or /api/vi/trnsaction
//all rotes will go to the rootRouter and then the rootRouter will handle it

app.use("/api/v1",rootRouter)

app.listen(PORT)

