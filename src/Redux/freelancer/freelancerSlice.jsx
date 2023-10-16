import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  freelancers: {},
};

const freelancerSlice = createSlice({
  name: "freelancers",
  initialState,
  reducers: {
    fetchFreelancers: (state, action) => {
      state.loading = false;
      state.freelancers = action.payload.freelancers;
    },
  },
});

export const { fetchFreelancers } = freelancerSlice.actions;
export default freelancerSlice.reducer;
