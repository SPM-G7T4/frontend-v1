import React from "react";

import styles from "./Courses.module.scss";

import { CoursesAll } from "./CoursesAll";
import { CoursesEnrolled } from "./CoursesEnrolled";
import { CoursesCompleted } from "./CoursesCompleted";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import CourseTab from "./CourseTab";

const CoursesList = () => {
  return (
    <>
      <div className={styles.courses}>
        <Container fluid>
          <div className={styles.search}>
            <FloatingLabel
              controlId="floatingInput"
              label="Search"
              className="mb-3"
            >
              <Form.Control type="text" name="search" placeholder="Search" />
            </FloatingLabel>
          </div>
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
                  <CourseTab courseType={CoursesAll} tab="#all" />
                  <CourseTab courseType={CoursesEnrolled} tab="#enrolled" />
                  <CourseTab courseType={CoursesCompleted} tab="#completed" />
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
