import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Navbar from '../compnents/Navbar';
import Sing from '../Page/Sing';
import Login from '../Page/Logih';
// import { Login } from '../Page/Login';



  
  const router = createBrowserRouter([
  
    {
        path: "/Navbar",
        element: <Navbar/>,
      },
   
    {
        path:'/Sing',
        element:<Sing/>,
    }
  ]);

function Routs() {
  return (
    <RouterProvider router={router} />
  )
}

export default Routs



 // {
    //     path: "/Login",
    //     element: <Login/>,
    // },