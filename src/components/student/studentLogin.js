import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate()
  const [id,setId] = useState('');
  const [password,setPassword] = useState('');
  const [passCheck,setPassCheck] = useState(true);

  function handleChange(e){
    e.preventDefault()
    if(e.target.name=='id'){
      setId(e.target.value.toUpperCase())
    }
    if(e.target.name=='password'){
      setPassword(e.target.value)
    }
    console.log(id,password)

  }

  const postData = async(e)=>{

    e.preventDefault()

    const res = await fetch('http://localhost:5000/studentLogin',{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id,password})
    })

    const data = await res.json()

    console.log(data)

    if(data.message=='LoggedIn'){
      navigate('/studentDash')
    }else{
      setPassCheck(false);
      setTimeout(()=>{
        setPassCheck(true);
      },1500)
    }

  }


  return (
    <>
      <div class="nav">
        <div class="title">
          <h2>STUDENT</h2>
        </div>
      </div>

      <div class="container">
        <div class="log">
          <h4>Login</h4>
        </div>
        <div class="form">
          <input class="inp" type="text" name='id' onChange={handleChange} placeholder="id" />
          <input class="inp" type="password" name="password" onChange={handleChange} placeholder="Password" />
          <button class="inp btn" style={{background:passCheck?'#3b4683':'red'}} onClick={postData}>{passCheck?'Submit':'Wrong Password'}</button>
        </div>
        <a href="#" id="fp">
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export default StudentLogin;
