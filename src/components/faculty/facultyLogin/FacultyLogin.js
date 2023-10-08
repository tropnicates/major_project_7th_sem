import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FacultyLogin = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [passCheck,setPassCheck] = useState(true);

  function handleChange(e){
    e.preventDefault()
    if(e.target.name=='email'){
      setEmail(e.target.value)
    }
    if(e.target.name=='password'){
      setPassword(e.target.value)
    }
    console.log(email,password)

  }

  const postData = async(e)=>{

    e.preventDefault()

    const res = await fetch('http://localhost:5000/facultyLogin',{
      method:'post',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email,password})
    })

    const data = await res.json()

    console.log(data)

    if(data.message=='LoggedIn'){
      navigate('/facultyDash')
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
          <h2>FACULTY</h2>
        </div>
      </div>

      <div class="container">
        <div class="log">
          <h4>Login</h4>
        </div>
        <div class="form">
          <input class="inp" type="email" name='email' onChange={handleChange} placeholder="Email" />
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

export default FacultyLogin;
