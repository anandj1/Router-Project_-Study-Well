import Template from "../Components/Template.jsx";
import loginImg from "../assets/login.png";

function Login({setislogin }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond. "
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="Login"
      setislogin={setislogin}
    />
  );
}

export default Login;
