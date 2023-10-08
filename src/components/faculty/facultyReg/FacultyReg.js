import React, { useState } from "react";
import FacultyCss from "./FacultyReg.module.css";
const FacultyReg = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.name)

    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "contact") {
      setContact(e.target.value);
    }
    if (e.target.name == "gender") {
      setGender(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }

    console.log(e.target.value);
  };

  const handleSubmit = async ()=>{

    const post_data = {
      name,contact,gender,email
    }

    const res = await fetch('http://localhost:5000/regFaculty',{
      method:'post',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post_data)
    })

    const data = await res.json()
    console.log(data)
    alert(data.msg)



  }

  return (
    <>
      <div className={FacultyCss.container}>
        <div className={FacultyCss.nav}>
          <span>Faculty</span>
        </div>
        <div className={FacultyCss.top}>
          <h4>Registeration Form</h4>
        </div>
        <div className={FacultyCss.form}>
          <div className={FacultyCss.frm}>
            <label className={FacultyCss.labl} for="name">
              Full Name
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Enter Full Name"
              name="name"
              onChange={handleChange}
            />

            <label className={FacultyCss.labl} for="Contact Number:">
              Contact Number
            </label>
            <input
              className={FacultyCss.inp}
              type="number"
              placeholder="+91 XXXXXXXXXX"
              name="contact"
              onChange={handleChange}
            />

            <label className={FacultyCss.labl} for="gender">
              Gender:
            </label>
            <div className={FacultyCss.gen}>
              <label for="">Male</label>
              <input
                className={FacultyCss.radio}
                type="radio"
                value="Male"
                name="gender"
                onChange={handleChange}
              />{" "}
              <label for="">Female</label>
              <input
                className={FacultyCss.radio}
                type="radio"
                value="Female"
                name="gender"
                onChange={handleChange}
              />{" "}
              <label for="">Other</label>
              <input
                className={FacultyCss.radio}
                type="radio"
                value="Other"
                name="gender"
                onChange={handleChange}
              />{" "}
            </div>

            <label className={FacultyCss.labl} for="email">
              Email
            </label>
            <input
              className={FacultyCss.inp}
              type="email"
              placeholder="xyz@iiitkota.ac.in"
              name="email"
              onChange={handleChange}
            />

            <button className={FacultyCss.btn} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyReg;
