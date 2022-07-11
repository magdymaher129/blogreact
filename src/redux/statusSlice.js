import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",

  title: "",
  body: "",
  status: "pending",
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.preload.status;
    },
  },
});
export const { setStatus } = statusSlice.actions;

export default statusSlice.reducer;
