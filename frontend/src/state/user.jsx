import { createSlice } from "@reduxjs/toolkit";


const user = JSON.parse(localStorage.getItem("user"));
const userSlice = createSlice({
  name: "user",
  initialState: user ? user : {
    username: "",
    profilePic: "",
    email: "",
    token: "",
  },
  reducers: {
    initUser: (state, action) => {
      return action.payload;
    },
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.username = "";
      state.token = "";
      state.profilePic = "";
      state.email = "";
    },
  },
});

export const { setUser,initUser,logout } = userSlice.actions;
export default userSlice.reducer;