import React from "react";
import Button from "./Button";

export default function Users()
{
    return(
        <div className="m-7">
            <div className="text-4xl font-bold">
                Users
            </div>
            <div className="flex mt-5">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search Users" aria-label="Search" aria-describedby="button-addon2"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="text-xl font-semibold">
                    Vaisakh R S
                </div>
                <Button content={"Send Money"} onClick={"onClick"}/>
            </div>
        </div>
    )
}