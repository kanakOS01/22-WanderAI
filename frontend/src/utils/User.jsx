import axios from "axios";
import { setUser } from "../state/user";
import store from "../store";
import { appServerUrl } from "../config";

export const signUp = async (username, email, password, profilePic = null) => {
  if (username && email && password) {
    await axios.post(appServerUrl+"/api/_v1/signup", {
      username,
      password,
      profilePic,
      email,
    });
  }
};

export const logIn = async (username, password) => {
  if (username && password) {
    const res = await axios.post(appServerUrl+"/api/_v1/signin", {
      username,
      password,
    });
    store.dispatch(setUser({username,token:res.data.token}));
    return res.data.token;
  }
};
