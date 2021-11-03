import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { courseSelector, fetchCourses } from "../store/courses";

import { Container } from 'react-bootstrap';
import Webinar from "../assets/Webinar.gif"

const Home = () => {
  const dispatch = useDispatch();

  const { courses } = useSelector(courseSelector);

  const name = sessionStorage.getItem('name');

  useEffect(() => {
    if (courses.length < 1) {
      dispatch(fetchCourses())
    } 
  })
  
  return (
    <>
      <div style={{"padding": "60px 0", "paddingLeft": "250px", "paddingRight": "90px", "maxWidth": "1300px"}}>
        <Container fluid>
          <div style={{"fontSize": "30px", "fontWeight": "bold", "margin": "2rem 0"}}>Welcome, {name}</div>
          <img src={Webinar} alt="Main" />
        </Container>
      </div>
    </>
  );
};

export default Home;
