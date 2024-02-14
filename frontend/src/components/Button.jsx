import React from "react";

export default function Button({content,onClick})
{
    return(
        <button className="  text-white bg-black hover:bg-white hover:text-black font-semibold py-2 px-6 border border-gray-400 rounded shadow" onClick={onClick}>{content}</button>
    )
}