/* eslint-disable react-hooks/exhaustive-deps */

// eslint-disable-next-line
import React, { useState, useEffect } from 'react'; // Import useState and useEffect

import axios from "axios";
import { toast } from "react-toastify";
import { Router, Routes, Route } from 'react-router';


//ASSET
import puplogo from '../asset/logo/logo.png';

//components
import NavigationBar from './component/nav';
import Sidebar from './component/sidebar';

//pages
import StudentProfile from './student-profile';

export default function StudentDashboard() {

    const [user, setUser] = useState({});

    useEffect(() => {
      const auth_token = localStorage.getItem("auth_token");
      const auth_token_type = localStorage.getItem("auth_token_type");
      const token = auth_token_type + " " + auth_token;
  
      axios
        .get("http://localhost:8888/users/", {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const onClickHandler = (event) => {
      event.preventDefault();
  
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_token_type");
  
      toast("See You !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    };


  return (
  //<Router>

 
    <div className='bg-gray-200 font-sans h-screen w-full flex flex-row'>

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




      <NavigationBar username={user.name} onClickFunction={onClickHandler} />
    </div>
    //</Router>
  );
}
