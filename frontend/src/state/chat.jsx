import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    showChat:false,
    history:[],
  },
  reducers: {
    show:(state)=>{
        return {...state,showChat:true};
    },
    hide:(state)=>{
      return {...state,showChat:false};
    },
    toggleVisibility:(state)=>{
        state.showChat = !state.showChat;
    },
    AddChat:(state,action)=>{
        state.history.push(action.payload);
    },
    setChat:(state,action)=>{
        state.history = action.payload;
    },
  },
});

export const { show, hide, toggleVisibility, AddChat, setChat } = userSlice.actions;
export default userSlice.reducer;