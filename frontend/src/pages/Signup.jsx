import React, { useState } from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Input from "../components/Input";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Signup()
{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstname]=useState('')
    const [lastName,setLastname]=useState('')

    const navigate=useNavigate()

    return(
        <div className="h-screen flex items-center justify-center">
            <div className="bg-gray-200 w-96  p-8">
                <div className="flex justify-center">
                <Heading label={"Sign up"}/>
                </div>
                <div className="flex justify-center text-center">
                    <Subheading label={"Enter your information to create an account"}/>
                </div>
                <div className="flex flex-col justify-center">
                    <Input placeholder={"Email"} type={"email"} onChange={(e)=>setUsername(e.target.value)}/>
                    <Input placeholder={"First Name"} type={"text"}onChange={(e)=>setFirstname(e.target.value)}/>
                    <Input placeholder={"Last Name"} type={"text"}onChange={(e)=>setLastname(e.target.value)}/>
                    <Input placeholder={"Password"} type={"password"}onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="flex justify-center mt-3">
                    <Button content={"Sign Up"} onClick={
                        async()=>{
                
                            const res= await axios.post("http://localhost:3000/api/v1/user/signup",{
                                username,
                                firstName,
                                lastName,
                                password
                            },
                            );
                            localStorage.setItem("token",res.data.token)  //for auth
                            navigate("/dashboard")
                        }   
                    }
                    />
                </div>
                <div className="flex justify-center mt-2">
                    <BottomWarning content={"Already have an account? "} action={"Sign in"} to={"/signin"}/>
                </div>
            </div>
        </div>
    )
}