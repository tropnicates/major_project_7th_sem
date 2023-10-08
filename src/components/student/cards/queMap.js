import React from "react";
import styless from "../QuizComp.module.css";
let QueMap = (props) => {

  function handleUpdate(){

    props.click(props.que)

  }

  return (
    <div className={styless.queMap} onClick={handleUpdate}>
      <span>{props.que}</span>
    </div>
  );
};

export default QueMap;
