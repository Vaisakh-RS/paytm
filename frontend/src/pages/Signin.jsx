import React, { useState } from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Input from "../components/Input";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin()
{
    const [username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const navigate=useNavigate()

    return(
        <div className="h-screen flex items-center justify-center">
            <div className="bg-gray-200 w-96  p-8">
                <div className="flex justify-center">
                <Heading label={"Sign in"}/>
                </div>
                <div className="flex justify-center text-center">
                    <Subheading label={"Enter your email and password to sign in"}/>
                </div>
                <div className="flex flex-col justify-center">
                    <Input placeholder={"Email"} onChange={(e)=>setUsername(e.target.value)}></Input>
                    <Input placeholder={"Password"} onChange={(e)=>setPassword(e.target.value)}></Input>
                </div>
                <div className="flex justify-center mt-3">
                    <Button content={"Sign In"} onClick={ async()=>{
                        console.log(username)
                        const res= await axios.post("http://localhost:3000/api/v1/user/signin",{
                            username,
                            password
                        },);
                       // localStorage.setItem("token",res.data.token)  //for auth
                        
                } } />
                </div>
                <div className="flex justify-center mt-2">
                    <BottomWarning content={"Do not have an account? "} action={"Sign up"} to={"/signup"}/>
                </div>
            </div>
        </div>
    ) 
}