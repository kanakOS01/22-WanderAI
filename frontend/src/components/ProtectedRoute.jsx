import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { initUser } from "../state/user";
import store from "../store";
import { useEffect } from "react";
import { logIn } from "../utils/User";
const mode = import.meta.env.MODE;

const ProtectedRoute = ({ children }) => {
  const naivgate = useNavigate();
  const user = useSelector((state) => state.user);
  const loc = window.location.pathname;
  const authenticatedRoutes = ["/home", "/explore", "/plan", "/account"];
  useEffect(() => {
    if (mode === "development") {
      logIn("admin", "admin");
    }
  }, []);
  if (!user || !user.token) {
    if (authenticatedRoutes.includes(loc)) {
      return <Navigate to="/login" />;
    }
  }
  if (user.token && (loc === "/signup" || loc === "/login")) {
    return <Navigate to="/home" />;
  }
  return (
    <>
      {children}
      <Navbar />
    </>
  );
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;