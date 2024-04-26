import React from 'react';
import Cards from '../Components/cards';

function body(){
    return(
        <div>
            <div className='w-full h-fit p-2 border rounded shadow-l text-green-600 m-2'>
                <div className='w-32 p-2 border border-white border-b-green-900 flex justify-start'>
                    <svg class="h-6 w-6 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    <p>Consultants</p>
                </div>
            </div>
            <div className='border rounded shadow-l flex justify-start m-2'>
                <div className='w-20 p-2 bg-green-900 text-white rounded-l text-center mr-6'>
                    Filters
                </div>
                <select className='w-48 border rounded-full p-1 m-1'>
                    <option>Select Range</option>
                    <option>1-10</option>
                    <option>10-20</option>
                    <option>20-30</option>
                </select>
                <div className='w-fit p-3 flex space-x-8 ml-4'>
                    <input type="radio" value="Summary" name="gender" /> Summary
                    <input type="radio" value="Branch Wise" name="gender" /> Branch Wise
                </div>
            </div>
            <Cards/>
        </div>
    );
}

export default body;