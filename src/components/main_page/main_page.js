import React from "react";
import Card from "./cards/card";
import "./main_page.css";

const Main_page = () => {

  console.log('checking')
  return (
    <div className="outter">
      <div className="navbar">
        <a className="nav_text">Main Page</a>
      </div>
      <div className="content">
        <h1 className="heading">Login as ?</h1>
        <Card text="Student" address="/student" />
        <Card text="Faculty" address="/faculty" />
        <Card text="Admin" address="/admin" />
      </div>
    </div>
  );
};

export default Main_page;
