import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { courseSelector, fetchCourses } from "../store/courses";

const Home = () => {
  const dispatch = useDispatch();

  const { courses } = useSelector(courseSelector);

  useEffect(() => {
    if (courses.length < 1) {
      dispatch(fetchCourses())
    } 
  })
  
  console.log(courses);
  
  return (
    <h1
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Home Page
    </h1>
  );
};

export default Home;
