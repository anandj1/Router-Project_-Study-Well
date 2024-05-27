import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { FcGoogle }  from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setislogin }) => {
  return (
    <div className="flex w-11/12 max-w-[1010px] py-12 mx-auto gap-[16rem] gap-y-0 mt-7">
      <div className="max-w-[450px]">
        <h1 className="font-semibold text-[1.87rem] leadding-[2.7rem]">{title}</h1>
        <p>
            <span className=" text-gray-500">{desc1}</span> 
            <span className=" text-blue-100 italic">{desc2}</span>
        </p>
        {formType==="Login"?
        (<LoginForm setislogin={setislogin}/>):
        (<SignupForm setislogin={setislogin}/>)}


        <div className="flex w-full items-center my-4 gap-x-3 mt-3 ml-[15px]"> 
          <div className="h-[2px] bg-white w-40 "></div>
          <p>OR</p>
          <div className="h-[2px] bg-white w-40"></div>

        </div>

        <button className="flex bg-opacity-30 gap-2 py-2   bg-slate-800 items-center justify-center rounded-md w-full">
        <FcGoogle className="mt-[4px]"/>
       
          <p className="">  Sign Up With Google</p>
        </button>

      


      </div>

      <div className="relative w-11/12 max-w-[500px] mt-5 ">
        <img src={frame} alt="Bg-Pattern" 
              width={558}
              height={504}></img>
        <img src={image} className="absolute -top-1 right-4"
             alt = "Students"
             width={558}
             height={504}></img>
        
      </div>

       
    </div>
 

  )
}

export default Template;
