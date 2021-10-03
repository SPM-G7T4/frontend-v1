import React from "react";

import { useParams } from "react-router-dom";

import styles from "./CourseDetail.module.scss";

import { CoursesAll } from "../CoursesAll";
import { Container } from "react-bootstrap";

const CourseDetails = () => {
  const { courseId } = useParams();

  const course = CoursesAll.find((p) => p.course_id === courseId);

  if (!course) {
    return (
      <div className={styles.course}>
        <h3>No Course Found</h3>
      </div>
    );
  }

  return (
    <>
      <div className={styles.course}>
        <Container fluid>
          {courseId}
          <p>{course.title}</p>

          <p>{course.badge}</p>
          <p>{course.date}</p>
          <p>{course.prerequisites}</p>

          <p>{course.desc}</p>
        </Container>
      </div>
    </>
  );
};

export default CourseDetails;
