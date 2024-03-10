import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState: "",
  reducers: {
    set: (_,action) => {
      return action.payload;
    },
  },
});

export const { set } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;