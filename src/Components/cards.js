import React from 'react';
import '../Components/body.css';

function cards(){
    return(
        <div>
            <div className='w-full flex justify-start m-2'>
                <div className='w-1/4 p-2 border border-l-4 border-l-orange-300 rounded h-28 m-2 mr-8'>
                    <p className='text-green-700 p-1 text-nowrap ml-2 font-bold text-left'>Consultant Count</p>
                    <svg class="h-10 w-10 p-2 text-gray-500 bg-orange-300 rounded-full float-right"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    <div className='grid ml-2'>
                        <p className='text-xl font-bold'>90/100</p>
                        <p>Today/Periods</p>
                    </div>
                </div>
                <div className='w-1/4 p-2 border border-l-4 border-l-sky-300 rounded h-28 m-2 mr-8'>
                    <p className='text-green-700 p-1 text-nowrap ml-2 font-bold text-left'>Consultations</p>
                    <svg class="h-10 w-10 p-2 text-gray-500 bg-sky-300 rounded-full float-right"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="18" y1="20" x2="18" y2="10" />  <line x1="12" y1="20" x2="12" y2="4" />  <line x1="6" y1="20" x2="6" y2="14" /></svg>
                    <div className='grid ml-2'>
                        <p className='text-xl font-bold'>11/25</p>
                        <p>Today/Periods</p>
                    </div>
                </div>
                <div className='w-1/4 p-2 border border-l-4 border-l-green-300 rounded h-28 m-2 mr-8'>
                    <p className='text-green-700 p-1 text-nowrap ml-2 font-bold text-left'>Labs</p>
                    <svg class="p-2 h-10 w-10 text-gray-500 bg-green-300 rounded-full float-right"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>

                    <div className='grid ml-2'>
                        <p className='text-xl font-bold'>25/560</p>
                        <p>Today/Periods</p>
                    </div>
                </div>
                <div className='w-1/4 p-2 border border-l-4 border-l-purple-300 rounded h-28 m-2 mr-8'>
                    <p className='text-green-700 p-1 text-nowrap ml-2 font-bold text-left'>DietPlans</p>
                    <svg class="p-2 h-10 w-10 text-gray-500 bg-purple-300 rounded-full float-right"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                    </svg>

                    <div className='grid ml-2'>
                        <p className='text-xl font-bold'>25/250</p>
                        <p>Today/Periods</p>
                    </div>
                </div>
            </div>
            <div className='w-full p-4 m-2 border rounded'>
            <svg class="h-8 w-8 text-gray-500 border rounded-full float-right mr-4"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" /></svg>
                <svg class="h-8 w-8 text-gray-500 border rounded-full float-right mr-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"/></svg>
                <p className='text-left'>Consultants</p>
                <table className='w-full p-4 table-fixed border-2 border-collapse m-4'>
                   <thead>
                        <tr>
                            <th>NAME</th>
                            <th>PATIENT COUNT</th>
                            <th>LABS</th>
                            <th>DIET PLANS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Smith</td>
                            <td>12</td>
                            <td>3</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Jane Doe</td>
                            <td>8</td>
                            <td>2</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Mark Johnson</td>
                            <td>6</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Mary Lee</td>
                            <td>10</td>
                            <td>4</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>David Chan</td>
                            <td>14</td>
                            <td>5</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Emilia Wang</td>
                            <td>5</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default cards;