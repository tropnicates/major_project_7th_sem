import React, { useEffect, useState } from "react";
import Card from "./courseCard";
import Styles from "./attendance.module.css";
let ManageAttendance = () => {

  const [course,setCourse] = useState([]);

  useEffect(()=>{
    getCourses();
  },[])

  async function getCourses(){

    const ress = await fetch('http://localhost:5000/getFaculty',{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
    })

    const data1 = await ress.json()

    const res = await fetch(`http://localhost:5000/courses/${await data1.Id}`,{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
    })

    const data = await res.json()
    setCourse(data)
    console.log(data)

  }


  return (
    <div className="outter">
      <div className="navbar">
        <a className="nav_text">Attendance</a>
      </div>
      <div className="content">
        <div className={Styles.attendanceBox}>
        {
          course.map((a)=><Card key={a.CourseId} courseid={a.CourseId} coursename={a.CourseName} semester={a.semester} branch={a.Branch} />)
        }
        </div>
      </div>
    </div>
  );
};

export default ManageAttendance;
