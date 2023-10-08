import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: {},
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { fetchJobs } = jobSlice.actions;
export default jobSlice.reducer;
