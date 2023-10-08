import React from "react";
import styles from "../QuizComp.module.css";

let Option = (props) => {

  function handleUpdate(){

    props.click(props.index,props.que)

  }

  return (
    <div className={styles.choices}>
      <input type="radio" name="option" checked={props.index==props.select?true:false} onClick={handleUpdate} />
      <p>{props.option}</p>
    </div>
  );
};

export default Option;
