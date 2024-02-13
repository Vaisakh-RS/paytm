import React from "react";

export default function BottomWarning({content,to,action})
{
    return(
        <div>
            {content}
            <a href={to}>{action}</a>
        </div>
    )
}