import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";

//how to pass user names as a prop
export default function Users()
{
    const [users,setUsers]=useState([])
    const [filter,setFilter]=useState("")

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk")
            .then(response=>{
                console.log(response.data.user)
                setUsers(response.data.user)
            })
    },[])

    return(
        <div className="m-7">
            <div className="text-4xl font-bold">
                Users
            </div>
            <div className="flex mt-5">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 
                        text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                         border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                          focus:bg-white focus:border-blue-600 focus:outline-none"
                           placeholder="Search Users" aria-label="Search" aria-describedby="button-addon2" 
                           onChange={(e)=>setFilter(e.target.value)}/>      
                    </div>
                </div>
            </div>
            <div >
                <div className="text-2xl font-semibold">
                    {users.map(user=><User user={user} key={user.username}/>)}
                </div>  
            </div>
        </div>
    )
}

function User({user})
{
    return(
        <div className="flex justify-between mt-6">
            <div >
             {user.firstName} {user.lastName}
            </div>
            <Button content={"Send Money"} onClick={(e)=>console.log(e)}/>
        </div>
    )
}