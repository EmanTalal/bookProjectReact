import React, { Component } from 'react'
import download from '../assets/download.png'
import { Link } from "react-router-dom";
// import book from '../Page/book'
import Sing from '../Page/Sing';
function Navbar() {
  return (
    <div>
        <header>
            <img className='logo' src='./assest/download.png'/>
        </header>
        <nav>
            <ul className='Nav'>
                <li className='it'><Link to='/Sing'></Link>Sing</li>
                <li className='it'><Link to='/book'></Link>login</li>
            </ul>
        </nav>
        </div>
   
)
}

export default Navbar