import { createSlice } from "@reduxjs/toolkit";

const exploreSlice = createSlice({
  name: "explore",
  initialState: [],
  reducers: {
    set:(state, action) => (state = action.payload),
  },
});

export const { set } = exploreSlice.actions;
export default exploreSlice.reducer;