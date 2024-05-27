import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setislogin}) => {
  const navigate = useNavigate()
  // const setislogin={setislogin}
  const[formdata,setformdata] = useState({f_name:"",l_name:"",email:"",password:"",confirmpassword:""})
  const[showPassword,Password] = useState(false);
  const[s_confirm,confirmpassword] = useState(false);
  const[accountType,setType] = useState("student");

  function changehandler(event){
    setformdata((prevData)=>{
        return{
            ...prevData,
            [event.target.name]:event.target.value
        }
    })
}
  function submitHandler(event){
    event.preventDefault();
    if(formdata.password!==formdata.confirmpassword){
      toast.error("Password do not match")
      return
    }
    setislogin(true);
    toast.success("Account Created");
    const  accountData = 
    {
      ...formdata
    };
    const finalData = {
      ...accountData,
      accountType
    }
    console.log(finalData)
  
    navigate("/dashboard")
  }



  return(
    <div>


      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max ">
      {/* Tab 1 for students */}
         <button onClick={()=>setType("student")}
          className={`${accountType==="student"
          ? " bg-richblack-900 text-richblack-25 rounded-md w-[100px]":"bg-transparent text-richblack-200 py-2 px-5 max-w-max rounded-full "}`}>   
      
          Student
         </button>
         {/* For Teacher */}
         <button
          onClick={()=>setType("Teacher")}
          className={`${accountType==="Teacher"
          ? " bg-richblack-900 text-richblack-25 rounded-md w-[100px]":"bg-transparent text-richblack-200 py-2 px-5 rounded-full "}`}> 
          Teacher
         </button>
      </div>

      <form className="flex flex-col gap-y-3 mt-4" onSubmit={submitHandler}>
      {/* This is for f_name and last_name */}
      <div className="flex w-full gap-6">
        <label className="w-full" >
          <p className="text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200 mt-1">*</sup> </p>
          <input className=" bg-richblack-800 rounded-md text-richblack-100 w-full p-[8px]"
           required
           type="text"
           name="f_name"
           placeholder="First Name"
           onChange={changehandler}
           value={formdata.f_name}
           ></input>

        </label>

        <label className="w-full">
          <p className="text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
          <input className=" bg-richblack-800 rounded-md text-richblack-100 w-full p-[8px]"
           required
           type="text"
           name="l_name"
           placeholder="Last Name"
           onChange={changehandler}
           value={formdata.l_name}
           ></input>

        </label>

        </div>

{/* For adding email */}
        <div className="flex  w-full">
        <label className="w-full">
            <p className="text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Email Address <sup className="text-pink-200">*</sup>

            </p>
            <input className=" bg-richblack-800 rounded-md text-richblack-100 w-full p-[8px]"
             type="email" name="email" required value={formdata.email} onChange={changehandler} placeholder="Enter Email id" >
                
            </input>
            
             
          </label>

        </div>
      {/* Create Password and confirm it */}

      <div className="flex gap-6">
       <label className="w-full relative">
        <p className="text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Create Password <sup className="text-pink-200">*</sup>
        </p>
        <input className=" bg-richblack-800 rounded-md text-richblack-100 w-full p-[8px]"
        type={showPassword?("text"):("password")}
        name="password"
        onChange={changehandler}
        placeholder="Password"
        value={formdata.password}
         ></input>
          <span className="absolute right-3 top-[40px] cursor-pointer"  onClick={()=>Password((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
       </label>


       <label className="w-full relative">
        <p className="text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Confirm Password <sup className="text-pink-200">*</sup>
        </p>
        <input className=" bg-richblack-800 rounded-md text-richblack-100 w-full p-[8px]"
        type={s_confirm?("text"):("password")}
        name="confirmpassword"
        onChange={changehandler}
        placeholder="Confirm Password"
        value={formdata.confirmpassword}
         ></input>
          <span  className="absolute right-3 top-[40px] cursor-pointer"
            onClick={()=>confirmpassword((prev)=>{
            return !prev
          })}>
                {s_confirm?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
       </label>

      </div>

      <button className=" bg-yellow-50 py-2 rounded-md w-full text-richblack-800 font-semibold mt-5"  type="submit">Sign Up</button>

      </form>








    </div>






    
  )
  
}

export default SignupForm;
