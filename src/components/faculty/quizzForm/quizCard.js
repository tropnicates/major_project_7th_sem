import React, { useState } from "react";
import classes from "./quizCard.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const [toggle, setToggle] = useState(props.active);

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/addQue?id=${props.id}`);
  }

  function handleChange() {
    setToggle(!toggle);
    console.log(toggle);
    postData();
  }

  const postData = async (e) => {
    const res = await fetch("http://localhost:5000/setQuiz", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ toggle, id: props.id }),
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <>
      {/* <div> */}
      {/* <button className={classes.out_div} onClick={handleClick}> */}
      <tr>
        <td>{props.sno}</td>
        <td>{props.faculty}</td>
        <td>{props.title}</td>
        <td>{props.year}</td>
        <td>{props.branch}</td>
        <td>{props.tques}</td>
        <td>{props.marks}</td>
        <td>{props.duration}</td>
        <td>
          <label className={classes.switch}>
            <input
              type="checkbox"
              name="active"
              checked={toggle}
              onChange={handleChange}
            />
            <span className={classes.slider}></span>
          </label>
        </td>
        <td>
          <button className={classes.editButton} onClick={handleClick}>
            Edit
          </button>
        </td>
        <td>
          <button className={classes.deleteButton}>Delete</button>
        </td>
      </tr>
      {/* </button> */}
      {/* </div> */}
    </>
  );
};

export default Card;
