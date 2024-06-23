import React from 'react'
import { useState } from 'react'

function Sing({onSing}) {
    let [username,setUseame]=useState('')
    let [password ,setPassord]=useState('')
    let [email,setEmil]=useState('')

    let checkSing=()=>{
        if(username==''||password==''||email==''){
            alert("Enter username and password")
            return;
        }   
        onSing(username,password,email)
    }
  return (
    <form className="form">
    <h2>Sign Up</h2>
    <div className="form-control">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" name="fullname"onChange={(e)=>setUseame(e.target.value)} />
    </div>
    <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"onChange={(e)=>setEmil(e.target.value)} />
    </div>
    <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"onChange={(e)=>setPassord(e.target.value)} />
    </div>
    <button onClick={checkSing} type="submit" className="btn">Sign Up</button>
</form>

)
}

export default Sing