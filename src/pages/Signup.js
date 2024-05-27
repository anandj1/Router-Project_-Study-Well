import signupImg from "../assets/signup.png";
import Template from "../Components/Template.jsx";

function Signup({ setislogin }) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setislogin={setislogin}
    />
  );
}

export default Signup;
