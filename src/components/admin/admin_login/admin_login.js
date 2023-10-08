import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let AdminLogin = () => {

  const navigate = useNavigate();

  const [passCheck,setPassCheck] = useState(true);

  const [loginData,setLoginData] = useState({
    username:'',
    password:''
  });

  const handleChange = (e)=>{

    setLoginData({...loginData,[e.target.name] : e.target.value})
    // console.log(loginData)

  }
  
  const postData = async(e)=>{

    e.preventDefault()

    const {username,password} = loginData

    const res = await fetch('http://localhost:5000/adminLogin',{
      method:'post',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username,password})
    })

    const data = await res.json()

    // console.log(data)

    if(data==true){
      navigate('/adminDashboard')
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
          <h2>ADMIN</h2>
        </div>
      </div>

      <div class="container">
        <div class="log">
          <h4>Login</h4>
        </div>
        <div class="form">
          <input class="inp" type="text" placeholder="username" value={loginData.username} name="username" onChange={handleChange}/>
          <input class="inp" type="password" placeholder="password" value={loginData.password} name="password" onChange={handleChange}/>
          <button class="inp btn" style={{background:passCheck?'#3b4683':'red'}} onClick={postData}>{passCheck?'Submit':'Wrong Password'}</button>
        </div>
        <a href="#" id="fp">
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export default AdminLogin;