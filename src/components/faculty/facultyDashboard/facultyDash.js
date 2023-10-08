import React from "react";
import "./facultyDash.css";
import { useNavigate } from "react-router-dom";

const Faculty_dash = () => {
  const navigatee = useNavigate();

  function handleClick() {
    navigatee("/quizzform");
  }

  console.log("Abhishek");

  return (
    <div className="outter">
      <div className="navbar">
        <a className="nav_text">Faculty</a>
      </div>
      <div className="content">
        <h1 className="heading">Dashboard</h1>

        <div className="button_div">
          <a href="/">Manage Students</a>
          <a href="/manageattendance">Take Attendance</a>
          <a href onClick={handleClick}>
            Create Quiz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faculty_dash;
