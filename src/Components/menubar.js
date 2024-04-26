import React from 'react';

function menubar(){


    return(
        <>
            <div className='bg-white h-max w-32 justify-items-start ml-1 ' style={{fontFamily:'sans-serif'}}>
                <h4 className='float-left m-2'>Dashboard</h4>
                <div class='group box-border rounded w-32 h-20 bg-gray-100 hover:bg-green-900 self-auto mt-2 text-center flex flex-col justify-center items-center'>
                    <svg class="h-8 w-8 text-gray-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <h3 class='group-hover:text-white'>Patients</h3>
                </div>

                <div className='group box-border rounded w-32 h-20 bg-gray-100 hover:bg-green-900 self-auto text-center mt-2 text-center flex flex-col justify-center items-center' >
                <svg class="h-8 w-8 text-gray-500 group-hover:stroke-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />  <path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
                    <h3 class='group-hover:text-white'> HR</h3>
                </div>
                <div className='group box-border rounded w-32 h-20 bg-gray-100 hover:bg-green-900 self-auto text-center  mt-2 text-center flex flex-col justify-center items-center'>
                <svg class="h-8 w-8 text-gray-500 group-hover:stroke-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" /></svg>
                    <h3 class='group-hover:text-white'> Labs</h3>
                </div>
                <div className='group box-border rounded w-32 h-20 bg-gray-100 hover:bg-green-900 self-auto text-center mt-2 text-center flex flex-col justify-center items-center'>
                <svg class="h-8 w-8 text-gray-500 group-hover:stroke-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />  <line x1="10" y1="9" x2="14" y2="9" />  <line x1="12" y1="7" x2="12" y2="11" /></svg>
                    <h3 class='group-hover:text-white'> Pharma</h3>
                </div>
                <h4 className='float-left m-2'>Processes</h4>
                <div className='group box-border rounded w-32 h-20 bg-gray-100 hover:bg-green-900 self-auto text-center mt-2 text-center flex flex-col justify-center items-center'>
                <svg class="h-8 w-8 text-gray-500 group-hover:stroke-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="9" y1="9" x2="10" y2="9" />  <line x1="9" y1="13" x2="15" y2="13" />  <line x1="9" y1="17" x2="15" y2="17" /></svg>
                    <h3 class='group-hover:text-white'> Registrations</h3>
                </div>
                <div className='group box-border rounded  w-32 h-20 bg-gray-100 hover:bg-green-900 self-auto text-center  mt-2 text-center flex flex-col justify-center items-center'>
                <svg class="h-8 w-8 text-gray-500 group-hover:stroke-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="12" y1="11" x2="12" y2="17" />  <line x1="9" y1="14" x2="15" y2="14" /></svg>
                    <h3 class='group-hover:text-white'> Consultation</h3>
                </div>
                <div className='group box-border rounded  w-32 h-20 bg-gray-100 hover:bg-green-900 self-auto text-center  mt-2 text-center flex flex-col justify-center items-center'>
                <svg class="h-8 w-8 text-gray-500 group-hover:stroke-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35" />  <line x1="10" y1="10" x2="16" y2="10" />  <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" /></svg>
                    <h3 class='group-hover:text-white'> Tests& Reports</h3>
                </div>
                <div className='group box-border rounded  w-32 h-20 bg-gray-100 hover:bg-green-900 self-auto text-center  mt-2 text-center flex flex-col justify-center items-center'>
                <svg class="h-8 w-8 text-gray-500 group-hover:stroke-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    <h3 class='group-hover:text-white'>Billing</h3>
                </div>
            </div>
        </>
    );
}
export default menubar;