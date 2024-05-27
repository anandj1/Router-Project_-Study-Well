import React from "react";
import StudyWell from "../assets/StudyWell.png";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let navigate= useNavigate();
  let islogin = props.islogin;
  let setislogin = props.setislogin;
  return(
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] mx-auto   ">
      
      <NavLink to="/" className="left-1 mb-[-45px] ml-[15px]">
      <img src={StudyWell} alt="logo" width={110} height={35} loading="lazy" />
      </NavLink>

       <div className="text-white flex gap-6 " >
        <ul className="flex flex-row gap-3 ">
        <li>
            <NavLink to="/"> Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
             <NavLink to="/contact"> Contact</NavLink>
        </li>



        </ul>
        </div>
      
      {/* For login signup logout dashboard */}
        <div className="flex gap-4 items-center">

        {!islogin ?
          <NavLink to="/login">
          <butto className="bg-richblack-800 text-richblack-100 rounded-[8px] px-[12px] py-[8px] border border-richblack-700">Login</butto>
          </NavLink>:null
        }

        {islogin &&

        
          <button className="bg-richblack-800 text-richblack-100 rounded-[8px] px-[12px] py-[8px] border border-richblack-700" onClick={function(){
            setislogin(false);
            toast.success("Log Out Success");
           navigate("/login")

          }}>Logout</button>

          
        }

        { !islogin &&

          <NavLink to="/signup">
            <button className="bg-richblack-800 text-richblack-100 rounded-[8px] px-[12px] py-[8px] border border-richblack-700">Sign Up</button>
          </NavLink>
        }

        { islogin?(
          <NavLink to="/dashboard">
          <button className="bg-richblack-800 text-richblack-100 rounded-[8px] px-[12px] py-[8px] border border-richblack-700">Dashboard</button>

          </NavLink>):null
        }

          
        </div>



       </div>

    
  )


}

       

export default Navbar;
