import React from "react";

function header(){
    return(
        <div>
            <div className="bg-[#1e1b4b] p-6 justify-center">
                    <select className=" w-32 py-2 px-3 border border-gray-300 bg-[#d4d4d8] rounded-l-full focus:outline-none focus:border-blue-500">
                        <option defaultChecked>Patient</option>
                        <option>Doctor</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-96 py-2 px-3 border border-gray-300 rounded-r-full focus:outline-none focus:border-blue-500 mr-3.5"
                    />
                    <button className="w-fit bg-green py-2 px-3 rounded-full bg-green-900 focus:outline-none focus:border-blue-500 text-white">+ Add New</button>
                    <svg class="h-8 w-8 text-cyan-500 rounded-full bg-gray-900 float-right mr-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <svg class="h-8 w-8 text-gray-500 rounded-full bg-gray-900 float-right mr-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
            </div>
        </div>
    );
}
export default header;