import React from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Input from "../components/Input";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";

export default function Signup()
{
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
                    <Input placeholder={"Email"}></Input>
                    <Input placeholder={"First Name"}></Input>
                    <Input placeholder={"Last Name"}></Input>
                    <Input placeholder={"Password"}></Input>
                </div>
                <div className="flex justify-center mt-3">
                    <Button content={"Sign Up"}/>
                </div>
                <div className="flex justify-center mt-2">
                    <BottomWarning content={"Already have an account? "} action={"Sign in"} to={"/signin"}/>
                </div>
            </div>
        </div>
    )
}