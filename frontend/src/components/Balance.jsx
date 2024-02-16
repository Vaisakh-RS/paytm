import React from "react";

export default function Balance({amount})
{
    return(
        <div className="flex m-7 font-bold text-lg bg-slate-200 py-5 px-3 w-80 rounded-lg">
            <div >
            Your Balance :
            </div>
            <div className="pl-3">
               Rs {amount}
            </div>
            
        </div>
    )
}