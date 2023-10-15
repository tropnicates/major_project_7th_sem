// import React from "react";
import Styles from "./Styles.module.css";
import { useState } from "react";
import * as XLSX from 'xlsx'

let AddCourse = () => {
  const [courseId, setCourseid] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCredit, setCredit] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [facultyId, setFacultyId] = useState("");

  const [bufferData, setBufferData] = useState(null);
  const [objData, setObjData] = useState(null);

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




  let objectKeysToLowerCase = function (origObj) {
    return Object.keys(origObj).reduce(function (newObj, key) {
        let val = origObj[key];
        let newVal = (typeof val === 'object') ? objectKeysToLowerCase(val) : val;
        newObj[key.split(/[.\-_ ']/).join('').toLowerCase()] = newVal;
        return newObj;
    }, {});
}

const handleFile = (e)=>{
  console.log("dd")
  let file = e.target.files[0];
  
  let reader = new FileReader();
  reader.readAsArrayBuffer(file)

  reader.onload= (e)=>{
       setBufferData(e.target.result);
  }

  

}

  const handleSubmit = async () => {

    const wb = XLSX.read(bufferData,{type:'buffer'})
    const wsName = wb.SheetNames[0]
    const ws = wb.Sheets[wsName]
    var datafile = XLSX.utils.sheet_to_json(ws)
    
    datafile = objectKeysToLowerCase(datafile)
    console.log(datafile)
    setObjData(datafile)

    const arr = Object.values(datafile)

    console.log(arr)

    const post_data = {
      courseId,
      courseName,
      courseCredit,
      branch,
      semester,
      facultyId,
      students:arr
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

            <label className={Styles.labl} for="faculty id">
              Add students
            </label>
            <input
              className={Styles.inp}
              type="file"
              onChange={handleFile}
              placeholder="select students file"
              name="facultyid"
              // onChange={handleChange}
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
