import React, { useEffect, useState } from "react";
import FacultyCss from "../../faculty/facultyReg/FacultyReg.module.css";
import Card from "./quizCard";
import styles from "./quizCard.module.css";

const ActiveQuiz = () => {
  const [data, setData] = useState([]);
  var sno = 1;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/active", {
          method: "get",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  console.log("InActiveQuiz rendered"); // add this line

  return (
    <>
      <div className={FacultyCss.container}>
        <div className={FacultyCss.nav}>
          <span>Quiz</span>
        </div>

        <div className={styles.QuizList}>
          <table className={styles.quizTable}>
            <tr>
              <th>S No.</th>
              <th>Created by</th>
              <th>Title</th>
              <th>Semester</th>
              <th>Branch</th>
              <th>Total Questions</th>
              <th>Total Marks</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
            {data.map((quiz) => (
              <Card
                key={quiz._id}
                id={quiz._id}
                sno={sno++}
                title={quiz.title}
                faculty={quiz.faculty}
                year={quiz.year}
                branch={quiz.branch}
                duration={quiz.duration}
                marks={quiz.marks}
                tques={quiz.totalQues}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default ActiveQuiz;
