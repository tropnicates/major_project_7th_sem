import React from "react";
import "./admin_dash.css";

const Admin_dash = () => {
  return (
    <div className="outter">
      <div className="navbar">
        <a className="nav_text">Admin Panel</a>
      </div>
      <div className="content">
        <h1 className="heading">Dashboard</h1>

        <div className="button_div">
          <a href="/">Manage Students</a>
          <a href="/facultyReg">Register Faculty</a>
          <a href="/addcourse">Add Courses</a>
        </div>
      </div>
    </div>
  );
};

export default Admin_dash;
