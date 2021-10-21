import React, { useState, useEffect } from "react";

import styles from "./Courses.module.scss";
import { useSelector } from "react-redux";
import { courseSelector } from "../../store/courses";

// import { CoursesEnrolled } from "./CoursesEnrolled";
// import { CoursesCompleted } from "./CoursesCompleted";

import {
  Container,
  Row,
  Col,
  // Form,
  // FloatingLabel,
  Tab,
  Nav,
} from "react-bootstrap";

import CourseTab from "./CourseTab";
import axios from "axios";

const CoursesList = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);

  const { courses } = useSelector(courseSelector);
  const allCourses = courses.data.courses;

  const userEmail = sessionStorage.getItem("email");

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const getEnrolledCourses = async () => {
      try {
        const { data } = await axios.post(process.env.REACT_APP_ENROLMENTS, {
          learner_email: userEmail,
        });
        setEnrolledCourses(data.data.enrolments);
      } catch (err) {
        console.log(err);
      }
    };

    const getCompletedCourses = async () => {
      try {
        const { data } = await axios.post(process.env.REACT_APP_COMPLETED, {
          learner_email: userEmail,
        });
        setCompletedCourses(data.data.course_completed);
      } catch (err) {
        console.log(err);
      }
    };

    getEnrolledCourses();
    getCompletedCourses();
  }, [userEmail]);

  return (
    <>
      <div className={styles.courses}>
        <Container fluid>
          {/* <div className={styles.search}>
            <FloatingLabel
              controlId="floatingInput"
              label="Search"
              className="mb-3"
            >
              <Form.Control type="text" name="search" placeholder="Search" />
            </FloatingLabel>
          </div> */}
          <div className={styles["list-title"]}>View Courses</div>
          <Tab.Container
            defaultActiveKey="#all"
            className={styles["nav-pills"]}
          >
            <Row>
              <Col lg={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="#all">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="#enrolled">Enrolled</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="#completed">Completed</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={9}>
                <Tab.Content>
                  <CourseTab courseType={allCourses} tab="#all" />
                  {enrolledCourses.length !== 0 && (
                    <CourseTab courseType={enrolledCourses} tab="#enrolled" />
                  )}
                  {completedCourses.length !== 0 && (
                    <CourseTab courseType={completedCourses} tab="#completed" />
                  )}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </>
  );
};

export default CoursesList;
