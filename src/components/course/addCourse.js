import React from "react";
import Styles from "./Styles.module.css";
import { useState } from "react";
let AddCourse = () => {
  const [courseId, setCourseid] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCredit, setCredit] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [facultyId, setFacultyId] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.name)

    if (e.target.name == "courseid") {
      setCourseid(e.target.value);
    }
    if (e.target.name == "coursename") {
      setCourseName(e.target.value);
    }
    if (e.target.name == "credit") {
      setCredit(e.target.value);
    }
    if (e.target.name == "branch") {
      setBranch(e.target.value);
    }
    if (e.target.name == "semester") {
      setSemester(e.target.value);
    }
    if (e.target.name == "facultyid") {
      setFacultyId(e.target.value);
    }

    console.log(e.target.value);
  };

  const handleSubmit = async () => {
    const post_data = {
      courseId,
      courseName,
      courseCredit,
      branch,
      semester,
      facultyId,
    };

    const res = await fetch("http://localhost:5000/addCourse", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post_data),
    });

    const data = await res.json();
    console.log(data);
    alert(data);
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.nav}>
          <span>COURSE</span>
        </div>
        <div className={Styles.top}>
          <h4>Add Course</h4>
        </div>
        <div className={Styles.form}>
          <div className={Styles.frm}>
            <label className={Styles.labl} for="name">
              Course Id
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter Course ID"
              name="courseid"
              onChange={handleChange}
            />

            <label className={Styles.labl} for="course name">
              Course Name
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter Course Name"
              name="coursename"
              onChange={handleChange}
            />

            <label className={Styles.labl} for="course credit">
              Course Credit
            </label>
            <input
              className={Styles.inp}
              type="number"
              placeholder="Enter Course Credit"
              name="credit"
              onChange={handleChange}
            />

            <label className={Styles.labl} for="branch">
              Branch
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter branch"
              name="branch"
              onChange={handleChange}
            />

            <label className={Styles.labl} for="semester">
              Semester
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter Semester"
              name="semester"
              onChange={handleChange}
            />

            <label className={Styles.labl} for="faculty id">
              Faculty Id
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter Faculty Id"
              name="facultyid"
              onChange={handleChange}
            />

            <button className={Styles.btn} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
