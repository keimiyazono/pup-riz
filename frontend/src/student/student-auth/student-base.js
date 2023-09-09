
import React, { useState, useEffect } from "react";
import StudentForgot from "./student-forgot";
import StudentLogin from "./student-login";

import StudentDashboard from "../student-dashboard";

import pupLogo from '../../asset/logo/logo.png';

function StudentBase() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState();

  useEffect(() => {
    const auth = localStorage.getItem("auth_token");
    setToken(auth);
  }, [token]);

  const chosePage = () => {
    if (page === "login") {
      return <StudentLogin setPage={setPage} />;
    }
    if (page === "forgot") {
      return <StudentForgot setPage={setPage} />;
    }
  };



  const pages = () => {
    if (token == null) {
      return (
        <div className="min-h-screen bg-red-800 flex justify-center items-center">
          <div className="py-12 px-12 flex flex-col items-center bg-white rounded-xl">
            <img src={pupLogo} alt="PUP Logo" className='w-20 h-auto'/>
            {chosePage()}
          </div>
        </div>

      );
    } else {
      return <StudentDashboard />;
    }
  };



  return <React.Fragment>{pages()}</React.Fragment>;
}

export default StudentBase;
