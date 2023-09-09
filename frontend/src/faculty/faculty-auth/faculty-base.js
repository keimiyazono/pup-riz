
import React, { useState, useEffect } from "react";
import StudentForgot from "./faculty-forgot";
import StudentLogin from "./faculty-login";


import FacultyDashboard from '../faculty-dashboard';




export default function FacultyBase() {

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
        <div className="py-12 px-12 flex flex-col items-center">
          {chosePage()}
        </div>

      );
    } else {
      return <FacultyDashboard />;
    }
  };


  return <React.Fragment>{pages()}</React.Fragment>;
}
