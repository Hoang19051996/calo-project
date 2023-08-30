import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || {
      username: "",
      password: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = globalSlice.actions;
export default globalSlice.reducer;
