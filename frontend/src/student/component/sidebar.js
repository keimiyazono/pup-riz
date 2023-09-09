import React from 'react'



import puplogo from '../../asset/logo/logo.png';

function Sidebar() {
  return (
    <div className='xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col bg-[#EDF2F4] divide-y-2'>
        <div className="flex justify-center items-end gap-5 py-5">
        
        <img src={puplogo} alt="PUP-Logo" className="w-20 h-auto" />
          <div className="space-y-2">
            <h1 className="uppercase text-xl font-bold">pup</h1>
            <small className="capitalize text-muted-foreground">research</small>
          </div>
        </div>

        <div className="flex flex-col flex-1 pt-10 px-5 pb-5">
          <h2 className="mb-2 text-lg font-semibold tracking-tight ">Menu</h2>
        
        </div>

    </div>
  )
}

export default Sidebar