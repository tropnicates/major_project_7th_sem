import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./attendance.module.css";
let CourseCard = (props) => {
  let navigate = useNavigate();
  const moveto = () => {
    let path = `takeattendance?branch=${props.branch}`;
    navigate(path);
  };
  return (
    <>
      <div className={Styles.card}>
        <p>{props.courseid}</p>
        <p>{props.coursename}</p>
        <p>{props.semester}</p>
        <p>{props.branch}</p>
        <button onClick={moveto}>view</button>
      </div>
    </>
  );
};

export default CourseCard;
