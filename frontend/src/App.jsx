import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { initChat } from "./utils/AIChat";
import Chat from "./components/Chat";
import { set as setItenary } from "./state/itenary";

//pages
import Start from "./pages/Start";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Experiences from "./pages/Experiences";
import Maps from "./pages/Maps";
import PlanATrip from "./pages/PlanATrip";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Ham from "./components/Ham";
import ProtectedRoute from "./components/ProtectedRoute";
//auth
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { initUser } from "./state/user";
import { useDispatch, useSelector } from "react-redux";
import { appServerUrl } from "./config";
import axios from "axios";
import EmergencyModal from "./components/EmergencyModal";
import { set } from "./state/explore";
import TranslatorModal from "./components/Translator";
const mode = import.meta.env.MODE;
const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mode !== "development") {
      if (localStorage.getItem("user")) {
        dispatch(initUser(JSON.parse(localStorage.getItem("user"))));
      }
    }
    axios.get(appServerUrl + "/api/_v1/explore", {
      headers: {
        "Authorization": "Bearer " + user.token,
      },
    })
      .then((res) => {
        dispatch(set(res.data));
      });
    axios.get(appServerUrl + "/api/_v1/itenary", {
      headers: {
        "Authorization": "Bearer " + user.token,
      },
    })
      .then((res) => {
        dispatch(setItenary(res.data));
      });
  }, []);
  useEffect(() => {
    const obj = {
      username: user.username,
      token: user.token,
    };
    localStorage.setItem("user", JSON.stringify(obj));
    if (user.token != "") {
      initChat(user.token);
    }
  }, [user]);
  return (
    <div className="main">
      <Router>
        <Ham />
        <Chat />
        <EmergencyModal />
        <TranslatorModal />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Start />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute>
                <Signup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blogs"
            element={
              <ProtectedRoute>
                <Experiences />
              </ProtectedRoute>
            }
          />
          <Route
            path="/map"
            element={
              <ProtectedRoute>
                <Maps />
              </ProtectedRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <ProtectedRoute>
                <Explore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plan"
            element={
              <ProtectedRoute>
                <PlanATrip />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
