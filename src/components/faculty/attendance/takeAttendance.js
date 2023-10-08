import React, { useEffect, useState } from "react";
import Styles from "./attendance.module.css";

let TakeAttendance = () => {
  const branch = window.location.search.split("=")[1];

  const [students, setStudents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch(`http://localhost:5000/attendence/${branch}`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setStudents(data);
    console.log(data);
  }

  var i = 1;

  return (
    <div className="outter">
      <div className="navbar">
        <a className="nav_text">Attendance</a>
      </div>
      <div className={Styles.content}>
        <div className={Styles.TakeAttendance}>
          <table>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>ID</th>
              <th>Attendance</th>
            </tr>
            {students.map((a) => (
              <tr>
                <td>{i++}</td>
                <td>{a.Name}</td>
                <td>{a.Id}</td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className={Styles.submitAttendance}>
          <button>Done</button>
        </div>
      </div>
    </div>
  );
};

export default TakeAttendance;
