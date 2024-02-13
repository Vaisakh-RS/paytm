import React from "react"
export default function Input({placeholder,id})
{
    return(
        <input type="text" placeholder={placeholder} id={id} className="m-3 pl-2 p-3 rounded-md"  />
    )
}