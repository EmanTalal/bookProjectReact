import React from 'react'
import { Link } from "react-router-dom";
import {useState} from 'react';

 function Login({onLogin}) {
  let [username,setUser]=useState('')
  let [password,setPassword]=useState('')


  let checkfor=()=>{
    if(username==''||password==''){
      alert('enter username and password');
      return;
    }
    onLogin(username,password);
  }


  return (
    <form className="form">
    <h2>Login</h2>
    <div className="form-control">
        <label htmlFor="fullname">UserName</label>
        <input type="text" id="fullname" name="fullname" onChange={(e)=>setUser(e.target.value)}/>
    </div>
    <div className="form-control">
        <label htmlFor="email">Password</label>
        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <button onClick={Login} type="submit" className="btn">Login</button>
</form>
  )
}
export default Login;
