import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  freelancers: {},
  filters: {
    categories: [],
    skills: [],
  },
};

const freelancerSlice = createSlice({
  name: "freelancers",
  initialState,
  reducers: {
    setFreelancers: (state, action) => {
      state.freelancers = action.payload.freelancers;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setFreelancers, setFilters } = freelancerSlice.actions;
export default freelancerSlice.reducer;
