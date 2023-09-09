import React from 'react';
import { Link } from 'react-router-dom';

import pupLogo from './asset/logo/logo.png';

function SelectPage() {
  return (
    <div className='min-h-screen bg-red-800 flex justify-center items-center'>
        <div className='py-12 px-12 flex flex-col items-center bg-white rounded-xl'>
            <img src={pupLogo} alt="PUP Logo" className='w-20 h-auto'/>
            <h1 className='text-2xl font-bold text-center mb-4 cursor-pointer'>Welcome to PUP-RIZ</h1>
            
            <div className='flex flex-col gap-3 items-center'>
                <h1>Select your role:</h1>
                <Link to="/student">
                    <button className='py-3 w-64 text-xl text-white bg-red-800 rounded-2xl hover:bg-red-300 active:bg-red-500 outline-none'>Student</button>
                </Link>
                <Link to="/faculty">
                    <button className='py-3 w-64 text-xl text-white bg-red-300 rounded-2xl hover:bg-red-300 active:bg-red-500 outline-none' disabled='true'>Faculty</button>
                </Link>
            </div>
                
        </div>

    </div>
  );
}

export default SelectPage;