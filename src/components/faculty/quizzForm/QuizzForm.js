import React, { useState } from "react";
import QuizzCss from "./Quizz.module.css";
import FacultyCss from "../facultyReg/FacultyReg.module.css";

let QuizzForm = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [questionNo, setQuestionNo] = useState("");
  const [duration, setDuration] = useState("");
  const [marks, setMarks] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.name)

    if (e.target.name == "title") {
      setTitle(e.target.value);
    }
    if (e.target.name == "year") {
      setYear(e.target.value);
    }
    if (e.target.name == "branch") {
      setBranch(e.target.value);
    }
    if (e.target.name == "questionNo") {
      setQuestionNo(e.target.value);
    }
    if (e.target.name == "duration") {
      setDuration(e.target.value);
    }
    if (e.target.name == "marks") {
      setMarks(e.target.value);
    }

    // console.log(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(title, year, branch, questionNo, duration, marks);
    const post_data = {
      title,
      year,
      branch,
      questionNo,
      duration,
      marks,
    };

    const res = await fetch("http://localhost:5000/quizzForm", {
      method: "post",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post_data),
    });

    const data = await res.json();
    console.log(data);
    // alert(data.msg);
  };

  return (
    <>
      <div className={FacultyCss.container}>
        <div className={FacultyCss.nav}>
          <span>Quiz</span>
        </div>
        <div className={FacultyCss.top}>
          <input
            className={QuizzCss.inp}
            placeholder="Title of the Quiz"
            name="title"
            onChange={handleChange}
          ></input>
        </div>
        <div className={FacultyCss.form}>
          <div className={FacultyCss.frm}>
            <label className={FacultyCss.labl} for="year">
              Year:
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Enter the year"
              name="year"
              onChange={handleChange}
            />

            <label className={FacultyCss.labl} for="branch">
              Branch:
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Enter the branch"
              name="branch"
              onChange={handleChange}
            />

            <label className={FacultyCss.labl} for="questionNo">
              Total Questions:
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Total number of questions"
              name="questionNo"
              onChange={handleChange}
            />
            <label className={FacultyCss.labl} for="duration">
              Duration:
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Enter the duration"
              name="duration"
              onChange={handleChange}
            />
            <label className={FacultyCss.labl} for="marks">
              Total Weightage:
            </label>
            <input
              className={FacultyCss.inp}
              type="text"
              placeholder="Total marks"
              name="marks"
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

export default QuizzForm;
