import React from "react";

export default function BottomWarning({content,to,action})
{
    return(
        <div className="font-semibold">
            {content}
            <a href={to} className="pointer underline">{action}</a>
        </div>
    )
}