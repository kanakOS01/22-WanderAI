import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CustomModal from "../Modal";
import { logIn } from "../../utils/User";
import "./Nav.css";

const SiginNav = () => {
  const [signin_username, ChangeUsername_signin] = useState("");
  const [signin_pass, ChangePass_signin] = useState("");
  const [show_siginin_Password, setShow_siginin_Password] = useState(false);
  const [modal_content, Change_modal_content] = useState("");
  const [show_signup_Modal, setShow_signup_Modal] = useState(false);
  const handle_signup_CloseModal = () => setShow_signup_Modal(false);
  const handle_signup_ShowModal = () => setShow_signup_Modal(true);
  const showModalError = (err) => {
    Change_modal_content(err);
    handle_signup_ShowModal();
  };
  const isFormValid_siginin = signin_username !== "" && signin_pass !== "";
  const handleSignin = async () => {
    if (isFormValid_siginin) {
      try {
        await logIn(signin_username, signin_pass);
        // navigate("/home");
      } catch (err) {
        showModalError(err?.response?.data?.error);
      }
    } else {
      showModalError("The credentials provided are incorrectly formatted.");
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
        <div className="head">Let&quot;s Start by Getiing you Signed In</div>
        {/* {error && <Alert variant="danger" >{error}</Alert>} */}
        <form className="signup-form">
          <input
            type="text"
            placeholder="Username"
            value={signin_username}
            onChange={(e) => ChangeUsername_signin(e.target.value)}
          />
          <div>
            <input
              type={show_siginin_Password ? "text" : "password"}
              placeholder="Password"
              value={signin_pass}
              onChange={(e) => {
                ChangePass_signin(e.target.value);
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
                setShow_siginin_Password(!show_siginin_Password);
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
              {show_siginin_Password ? (
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

          <div>
            <div
              className="btn"
              style={
                !isFormValid_siginin
                  ? { backgroundColor: "rgb(156 156 156)" }
                  : { backgroundColor: "#fff" }
              }
              onClick={handleSignin}
            >
              Sign-In
            </div>
          </div>
        </form>

        <Link to="/signup">
          <div className="already">Create a new Account?</div>
        </Link>
      </div>
    </motion.div>
  );
};
export default SiginNav;