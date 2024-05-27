import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard.js";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute.jsx"

function App() {
  const[islogin,setislogin] = useState(false);
  
  return (
    <div className="  min-h-screen text-white bg-black flex-col">
    <div className="">
      <Navbar islogin={islogin} setislogin={setislogin}/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setislogin={setislogin}/>}/>
      <Route path="/signup" element={<Signup setislogin={setislogin}/>}/>
      <Route path="/dashboard" element={
        <PrivateRoute islogin={islogin}>
          <Dashboard/>
        </PrivateRoute>
      }/>







    </Routes>
    </div>
  );
}

export default App;
