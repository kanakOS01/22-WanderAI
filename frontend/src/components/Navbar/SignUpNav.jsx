import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import CustomModal from "../Modal";
import { signUp } from "../../utils/User";
import "./Nav.css";

const SignupNav = () => {
  const navigate = useNavigate();
  const [modal_content, Change_modal_content] = useState("");
  const [show_signup_Modal, setShow_signup_Modal] = useState(false);
  const [show_signupPassword, setShow_signup_Password] = useState(false);
  const [signup_username, ChangeUsername_signup] = useState("");
  const [signup_email, ChangeEmail_signup] = useState("");
  const [signup_pass, ChangePass_signup] = useState("");
  const [signup_repass, ChangeRePass_signup] = useState("");
  const isFormValid_siginup =signup_email !== "" && signup_pass !== "" && signup_pass === signup_repass;
  const handleSignup = async () => {
    if (isFormValid_siginup) {
      try {
        await signUp(signup_username,signup_email, signup_pass);
        navigate("/login");
      } catch (err) {
        showModalError(err?.response?.data?.error);
      }
    } else {
      showModalError("The credentials provided are incorrectly formatted.");
    }
  };
  function calculatePasswordStrength(input_string) {
    if (input_string.length === 0) return "Weak";
    const n = input_string.length;
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let specialChar = false;
    const normalChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";
    for (let i = 0; i < n; i++) {
      if (input_string[i] >= "a" && input_string[i] <= "z") {
        hasLower = true;
      }
      if (input_string[i] >= "A" && input_string[i] <= "Z") {
        hasUpper = true;
      }
      if (input_string[i] >= "0" && input_string[i] <= "9") {
        hasDigit = true;
      }
      if (!normalChars.includes(input_string[i])) {
        specialChar = true;
      }
    }
    let strength = "Weak";
    if (hasLower && hasUpper && hasDigit && specialChar && n >= 8) {
      strength = "Strong";
    } else if ((hasLower || hasUpper) && specialChar && n >= 6) {
      strength = "Moderate";
    }
    return strength;
  }
  useEffect(() => {
    updateRemark();
  }, [signup_pass]);

  const handle_signup_CloseModal = () => setShow_signup_Modal(false);
  const handle_signup_ShowModal = () => setShow_signup_Modal(true);
  const showModalError = (err) => {
    Change_modal_content(err);
    handle_signup_ShowModal();
  };
  const updateRemark = () => {
    const p = document.getElementById("remark");
    if (p) {
      const passCheck = calculatePasswordStrength(signup_pass);
      p.innerText = passCheck;
      if (passCheck === "Strong") p.style.color = "green";
      else if (passCheck === "Moderate") p.style.color = "orange";
      else p.style.color = "red";
    }
  };
  return (
    <motion.div
      className="nav-signup nav"
      initial={{ transform: "translateY(100%)" }}
      animate={{
        transform: "translateY(-10%)",
      }}
      exit={{ opacity: 0, transform: "translateY(100%)" }}
    >
      <CustomModal
        show={show_signup_Modal}
        handleClose={handle_signup_CloseModal}
        bodyContent={modal_content}
        Color="red"
      />
      <div className="content">
        <div className="head">Let&quot;s Start with a quick Sign-up</div>
        <form className="signup-form">
          <input
            type="text"
            placeholder="Username"
            value={signup_username}
            onChange={(e) => ChangeUsername_signup(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={signup_email}
            onChange={(e) => ChangeEmail_signup(e.target.value)}
          />
          <div>
            <input
              type={show_signupPassword ? "text" : "password"}
              placeholder="Password"
              value={signup_pass}
              onChange={(e) => {
                ChangePass_signup(e.target.value);
                updateRemark();
              }}
              style={{
                borderRadius: "15px 0 0 15px",
                width: "90%",
                display: "inline",
              }}
            />
            <p
              onClick={(e) => {
                e.preventDefault();
                setShow_signup_Password(!show_signupPassword);
              }}
              style={{
                borderRadius: "0 15px 15px 0",
                width: "10%",
                height: "2rem",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {show_signupPassword ? (
                <span
                  style={{
                    transform: "scale(1.2) translateY(.3em)",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  className="material-symbols-outlined"
                >
                  visibility
                </span>
              ) : (
                <span
                  style={{
                    transform: "scale(1.2) translateY(.3em)",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  className="material-symbols-outlined"
                >
                  visibility_off
                </span>
              )}
            </p>
          </div>
          <input
            type={show_signupPassword ? "text" : "password"}
            placeholder="Re-Enter Password"
            value={signup_repass}
            onChange={(e) => ChangeRePass_signup(e.target.value)}
          />
          <div className="remark-pass" style={{ textAlign: "center" }}>
            Password Strength -{" "}
            <p id="remark" style={{ display: "inline", color: "red" }}>
              Weak
            </p>
          </div>
          <div>
            <div
              className="btn"
              style={
                !isFormValid_siginup
                  ? { backgroundColor: "rgb(156 156 156)" }
                  : { backgroundColor: "#fff" }
              }
              onClick={handleSignup}
            >
              Sign-Up
            </div>
          </div>
          <div className="or">or</div>
        </form>
        <Link to="/login">
          <div className="already">Already have an account?</div>
        </Link>
      </div>
    </motion.div>
  );
};
export default SignupNav;