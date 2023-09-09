

// NavigationBar.js
import React from 'react';

const NavigationBar = ({username, onClickFunction }) => {
  return (
    <div className='h-auto bg-[#EDF2F4] line flex py-4 justify-end items-center'>
        <div className="flex gap-4 px-3 items-center">
            <div className="flex flex-col">
                <h1 className='text-black font-bold text-sm'>{username}</h1>
                <p className='font-light text-xs'>2020-00000-CM-2</p>
            </div>
            
            <button onClick={onClickFunction} className='py-3 px-10 text-xs font-bold text-white outline-none bg-red-800 hover:bg-red-500 active:bg-red-400'>
                Log out
            </button>
        </div>
        
    </div>
  );
};

export default NavigationBar;
