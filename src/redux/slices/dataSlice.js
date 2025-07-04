import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  technologies: [],
  education: [],
  experience: [],
  projects: [],
};

const dataSlices = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTechnologies: (state, action) => {
      state.technologies = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const {
  setLoading,
  setTechnologies,
  setEducation,
  setExperience,
  setProjects,
} = dataSlices.actions;

export default dataSlices.reducer;
