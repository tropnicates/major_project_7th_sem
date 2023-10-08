import React, { useState,useEffect } from "react";
import './addQue.css'


function QuizForm() {

  const url = window.location.search.split('=')[1]
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:5000/getQuizInfo/${url}`, {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setData(data);
    console.log(data)
  }


  const [quiz, setQuiz] = useState({
    questions: []
  });

  const postData = async(e)=>{

    e.preventDefault()

    const res = await fetch(`http://localhost:5000/addQue/${url}`,{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(quiz)
    })

    const data = await res.json()

    console.log(data)

  }


  const totalQuestions = data.totalQues;

  const [newQuestion, setNewQuestion] = useState({
    questionId: "",
    question: "",
    options: [{ option: "" }, { option: "" }, { option: "" }, { option: "" }],
    mark: "",
    correct: ""
  });

  const handleNewOption = (index, option) => {
    const options = [...newQuestion.options];
    options[index].option = option;
    setNewQuestion({ ...newQuestion, options });
  };

  const handleAddOption = () => {
    const options = [...newQuestion.options, { option: "" }];
    setNewQuestion({ ...newQuestion, options });
  };

  const handleNewQuestion = (e) => {
    e.preventDefault();
    if (quiz.questions.length < totalQuestions) {
      setQuiz({ ...quiz, questions: [...quiz.questions, newQuestion] });
      setNewQuestion({
        questionId: "",
        question: "",
        options: [{ option: "" }, { option: "" }, { option: "" }, { option: "" }],
        mark: "",
        correct: ""
      });
    } else {
      alert(`You cannot add more than ${totalQuestions} questions to the quiz.`);
    }
  };

  function handleClick(){
    console.log(quiz)
  }
  

  return (
    <form className="form-container" onSubmit={handleNewQuestion} >
      <label>
        Question Id:
        <input
          type="text"
          value={newQuestion.questionId}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, questionId: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Question:
        <input
          type="text"
          value={newQuestion.question}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, question: e.target.value })
          }
        />
      </label>
      <br />
      {newQuestion.options.map((option, index) => (
        <label key={index}>
          Option {index + 1}:
          <input
            type="text"
            value={option.option}
            onChange={(e) => handleNewOption(index, e.target.value)}
          />
        </label>
      ))}
      <br />
      <button type="button" onClick={handleAddOption}>
        Add Option
      </button>
      <br />
      <label>
        Mark:
        <input
          type="text"
          value={newQuestion.mark}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, mark: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Correct Answer:
        <input
          type="text"
          value={newQuestion.correct}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, correct: e.target.value })
          }
        />
      </label>
      <br />
      <button type="submit">Add Question</button>
      <hr />
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <p>Question Id: {question.questionId}</p>
          <p>Question: {question.question}</p>
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>{option.option}</li>
            ))}
          </ul>
          <p>Mark: {question.mark}</p>
          <p>Correct Answer: {question.correct}</p>
        </div>
      ))}
      <button onClick={postData}>Done Adding Questions</button>
    </form>

  );
}

export default QuizForm;
