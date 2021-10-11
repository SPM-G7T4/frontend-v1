import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  loading: true,
  hasError: false,
  courses: [],
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourses: (state) => {
      state.loading = true;
    },
    getCoursesSuccess: (state, { payload }) => {
      state.courses = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCoursesFailure: (state) => {
      state.hasErrors = true;
    },
  },
});

// Actions from slice
export const { getCourses, getCoursesSuccess, getCoursesFailure } = courseSlice.actions;

// Selector
export const courseSelector = (state) => state.courses;

// Reducer
export default courseSlice.reducer;

// Async Thunk
export const fetchCourses = () => {
  return async (dispatch) => {
    dispatch(getCourses());

    try {
      axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
      const { data } = await axios.get(process.env.REACT_APP_COURSES);
      console.log("---Fetching Data ---");
      dispatch(getCoursesSuccess(data));
    } catch (error) {
      dispatch(getCoursesFailure());
    }
  };
};
