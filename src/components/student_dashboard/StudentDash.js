import React, { useEffect, useState } from "react";
import StudentDashCss from "./StudentDash.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import Dash from "./pages/Dashboard";
import Test from "./pages/Test";
const StudentDash = () => {
  const navigate = useNavigate();
  function handleQuiz() {
    navigate(`/active`);
  }

  const [data, setData] = useState({
    Name: "Loading...",
    Father: "Loading...",
    Gender: "Loading...",
    Contact: "Loading...",
    Branch: "Loading...",
    Id: "Loading...",
    Semester: "Loading...",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/studentInfo", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setData(data);
    console.log(data);
  };

  return (
    <div className={StudentDashCss.container}>
      <div className={StudentDashCss.nav}>
        <img src="pictures/LOGO.png" />
        <span>STUDENT PANEL</span>

        <div className={StudentDashCss.student_logout}>
          <button
            style={{
              background: "white",
              padding: "0.5rem",
              borderRadius: "0.4rem",
            }}
          >
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </button>
        </div>
      </div>

      <div className={StudentDashCss.semesterBox}>
        <span id={(StudentDashCss.semHead, StudentDashCss.center)}>
          Current-Sem
        </span>
        <span id={StudentDashCss.semHead}>{data.Semester}</span>
      </div>

      <div className={StudentDashCss.front}>
        <div className={StudentDashCss.options}>
          <button>Dashboard</button>
          <button>Class Schedule</button>
          <button>Attendance</button>
          <button>Assignments</button>
          <button>Academic Progress</button>
          <button>Courses</button>
          <button>Study Material</button>
          <button>Faculty Feedback</button>
          <button>Student Feedback</button>
          <button onClick={handleQuiz}>Quiz</button>
          <button>Announcements</button>
          <button>Academic Support</button>
        </div>

        {Dash()}
      </div>
    </div>
  );
};

export default StudentDash;
