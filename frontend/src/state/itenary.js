import { createSlice } from "@reduxjs/toolkit";

const itenarySlice = createSlice({
  name: "itenary",
  initialState: [],
  reducers: {
    set: (_,action) => {
      return action.payload;
    },
    clear: () => {
      return [];
    },
    add: (state,action) => {
      return [...state,action.payload];
    },
  },
});

export const { set,clear,add } = itenarySlice.actions;
export default itenarySlice.reducer;