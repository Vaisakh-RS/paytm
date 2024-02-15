import React from "react"

export default function AppBar()
{
    return(
        <div className="bg-gray-100 h-20 rounded-md flex justify-between items-center">
            <div className="pl-8 font-bold text-xl">
                PayEZ
            </div>
            <div className="font-semibold text-xl border border-black  rounded-lg p-2 mr-3 flex justify-between items-center">
                P
            </div>
        </div>
    )
}