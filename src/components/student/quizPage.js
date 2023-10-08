import React, { useEffect, useState } from "react";
import styles from "./QuizComp.module.css";
import QuizComp from "./cards/quizComp";
import Option from "./cards/option";
import QueMap from "./cards/queMap";
import { useNavigate } from "react-router-dom";

let QuizPage = () => {
  const [data,setData] = useState([]);
  const [student,setStudent] = useState({});
  const [quizId,setQuizId] = useState('');
  var [index,setIndex] = useState(0);
  const [input,setInput] = useState({});
  var option_indx = 1
  const [output,SetOut] = useState('')
  const navigate = useNavigate();

  useState(()=>{
    document.addEventListener("visibilitychange", () => {
      document.title = document.visibilityState=='hidden'?'cheating':'Quiz';
      if(document.visibilityState=='hidden') window.alert('Your activity is being Monitered !!')  
      console.log(document.visibilityState)  
  });
  },[document.visibilityState])


  const url = window.location.search.split('=')[1]

    useEffect( async ()=>{
      fetchData()
      fetchStudentData()
    },[])

  const fetchData = async()=>{

    const res = await fetch(`http://localhost:5000/getQuiz/${url}`,{
      method:'get',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      }
    })

    const datajson = await res.json()
    setData(datajson.questions)
    setQuizId(datajson._id)
    // console.log(datajson.questions)
  }

  const fetchStudentData = async()=>{

    const res = await fetch(`http://localhost:5000/studentInfo`,{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      }
    })

    const datajson = await res.json()
    setStudent(datajson)
    // console.log(datajson)
  }

  function handelClick(e){
    // console.log(e.target.name)
    if(e.target.name=='next' && index<data.length-1) setIndex(index+1)
    if(e.target.name=='prev'&& index>0) setIndex(index-1)

  }

  function handelClick2(i){
    // console.log(i)
    setIndex(i-1)
  }

  function handelClick3(index,q){

    // console.log(index,que)
    input[q] = index
    setInput({...input})
    console.log(input)

  }

  const postData = async(e)=>{

    const res = await fetch('http://localhost:5000/submitQuiz',{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({response:input,id:student.Id,quizId})
    })

    const data = await res.json()
    SetOut(data)
    console.log(data)

  }


  async function handleQuizSubmit(){
    if(window.confirm("Do you want to submit quiz now!!")){
      await postData()
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <span>Quiz</span>
        </div>

        <div class={styles.Panel}>
          <div className={styles.quizPanel}>
            <div className={styles.quizFrame}>
              <QuizComp
                quesNo={data.length?data[index].questionId:0}
                quesStatement={data.length?data[index].question:'Loading...'}
              />
              {
                data.length?
                data[index].options.map((a)=><Option select={input[data[index]._id]} index={option_indx++} que={data[index]._id} click={handelClick3} key={a._id} option={a.option}></Option>):'loading...'
              }
            </div>

            <div className={styles.quesControl}>
              <button className={styles.prevQues} name="prev" onClick={handelClick}>{"<< Previous"}</button>
              <button className={styles.nextQues} name="next" onClick={handelClick}>{"Next >>"}</button>
            </div>
          </div>
          <div class={styles.sidePanel}>
            <div className={styles.mapBox}>

              {
                data.length
                ?
                data.map((a)=><QueMap que={a.questionId} key={a._id} click={handelClick2}></QueMap>)
                :
                'loading...'
              }

            </div>
            <div>
              <button className={styles.submitQuiz} onClick={handleQuizSubmit}>Submit Quiz</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
