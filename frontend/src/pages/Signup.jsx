import Heading from "../components/Heading";
import React from "react";
import Subheading from "../components/Subheading";
import Input from "../components/Input";
import BottomWarning from "../components/BottomWarning";

export default function Signup()
{
    return(
        <div className="bg-gray-400 h-96 w-56">
            <Heading label={"Signup"}/>
            <Subheading></Subheading>
            <Input placeholder={"something"}></Input>
            <BottomWarning content={"this is the content"} action={"Signin"}></BottomWarning>
        </div>
    )
}