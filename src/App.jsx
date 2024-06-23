
import './App.css'
import Navbar from './compnents/Navbar'
import { useState } from 'react'
import Routs from './routs/Routs'
import { Link } from 'react-router-dom'
import Logih from './Page/Login'
import Sing from './Page/Sing'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // let [isLogin,setIsLogin]=useState(false)
  // let[user,setUser]=useState('')


  // let singh=(username,password)=>{
  //     localStorage.setItem('user',username)
  // };
  // let logingh=(username, password)=>{
  //   setIsLogin(true)
  //   setUser(username)
  //   localStorage.getItem('user',username)
  // }

  return (
    <>
    <Routs>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routs>
        {/* <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}
      </Routs>
    </Routs>
    </> 
  )
}

export default App
