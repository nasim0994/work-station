import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: {},
  filters: {
    categories: [],
    locations: [],
    jobTypes: [],
  },
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload.jobs;
    },
    setJobFilters: (state, action) => {
      state.filters = action.payload;
    },
    setClearFilters: (state) => {
      state.filters.categories = [];
      state.filters.locations = [];
      state.filters.jobTypes = [];
    },
  },
});

export const { setJobs, setJobFilters, setClearFilters } = jobSlice.actions;
export default jobSlice.reducer;
