import React from "react";
import styles from "../QuizComp.module.css";

let QuizComp = (props) => {
  return (
      <div className={styles.quesTitle}>
        <div className={styles.queNo}>
          <p>{"Q"+props.quesNo+"."}</p>
        </div>
        <div className={styles.quesText}>
          <p>{props.quesStatement}</p>
        </div>
      {/* <div>
        <div className={styles.choices}>
          <input type="checkbox" />
          <p>{props.option1}</p>
        </div>
        <div className={styles.choices}>
          <input type="checkbox" />
          <p>{props.option2}</p>
        </div>
        <div className={styles.choices}>
          <input type="checkbox" />
          <p>{props.option2}</p>
        </div>
        <div className={styles.choices}>
          <input type="checkbox" />
          <p>{props.option4}</p>
        </div>
      </div> */}
    </div>
  );
};

export default QuizComp;
