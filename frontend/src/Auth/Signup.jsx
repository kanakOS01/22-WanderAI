import "./Signup.css";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
const SignUp = () => {
  return (
    <div className="signup" >
      <div className="top-logo">
        <div className="content">
          <img src={logo} alt="" draggable="false" />
          &nbsp;
          WanderAI
        </div>
      </div>
      <Navbar page={"signup"} />
    </div>
  );
};
export default SignUp;