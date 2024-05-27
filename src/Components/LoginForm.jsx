import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";



const LoginForm =({setislogin})=>{
    const navigate  = useNavigate()
    const[formdata,setformdata] = useState({email:"",password:""})
    const[showPassword,setPassword] = useState(false);

    function submitHandler(event){
        event.preventDefault();
        setislogin(true);
        toast.success("Logged in")
        navigate("/dashboard")
        const data = {
            ...formdata
        }
        console.log(data);
        

    }
    function changhandler(event){
        setformdata((prevData)=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }
    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
          <label className="w-full">
          <p className="text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem]">
               Email Address<sup className="text-pink-200">*</sup>

            </p>
           
            <input className=" bg-richblack-800 rounded-md text-richblack-100 w-full p-[8px]" type="email" name="email" required value={formdata.email} onChange={changhandler} placeholder="Enter Email id" >
                
            </input>
            
             
          </label>

          <label className="w-full relative"> 
            <p className="text-[0.975rem] relative text-richblack-5 mb-1 leading-[1.375rem]">
               Password<sup className="text-pink-200">*</sup>

            </p>
            <input 
            
            
            type={showPassword?("text"):("password")}
             name="password" 
             required value={setformdata.password} 
             onChange={changhandler} 
             placeholder="Enter Password" 
             className="   bg-richblack-800 rounded-md text-richblack-100 w-full p-[8px]">
            </input>

            <span className=" absolute right-3 mt-3 cursor-pointer " onClick={()=>setPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
            </label>
            <Link to="#">
                <p className="text-[0.82rem] -mt-[10px] text-blue-100 max-w-max ml-auto">
                    Forgot Password
                </p>
            </Link>


            
             
          

         






 <button className=" bg-yellow-50 py-2 rounded-md  text-richblack-800 font-semibold"  type="submit ">Sign in</button>

        </form>

    )
}

export default LoginForm;
