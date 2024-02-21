import React from "react"
export default function Input({type,placeholder,id,onChange})
{
    return(
        <input type={type} placeholder={placeholder} id={id} onChange={onChange} className="m-3 pl-2 p-3 rounded-md"  />
    )
}