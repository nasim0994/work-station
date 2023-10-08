import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: {},
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    getFilterJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { getFilterJobs } = jobSlice.actions;
export default jobSlice.reducer;
