import React from "react";

import { useParams } from "react-router-dom";

import styles from "./CourseDetail.module.scss";

import { CoursesAll } from "../CoursesAll";
import { Container, Image, Badge } from "react-bootstrap";
import CourseTable from "./CourseTable";

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
          <div className={styles.img}>
            <Image src="http://picsum.photos/1500/300" fluid />
          </div>
          {courseId}
          <div className={styles["title"]}>{course.title}</div>
          <div className="pb-3">{course.desc}</div>
          {course.prerequisites.length !== 0 ? (
            <div className="pb-3 text-primary">
              <span className={styles["prerequisites"]}>Prerequisites: </span>
              {course.prerequisites.map((el) => {
                return (
                  <Badge key={el} pill bg="primary">
                    {el}
                  </Badge>
                );
              })}
            </div>
          ) : (
            <div className="pb-3 text-primary">
              <span className={styles["prerequisites"]}>No Prerequisites</span>
            </div>
          )}
          <div>
            <CourseTable />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CourseDetails;
