import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";
import styles from "./CourseTable.module.scss";

import { Table } from "react-bootstrap";

import EnrollButton from "./EnrollButton";

const CourseTable = (props) => {
  
  const { courseId } = useParams();

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [classDetails, setClassDetails] = useState([]);
  let now = new Date().getTime();

  const userEmail = sessionStorage.getItem("email");

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const getClassDetails = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_COURSES}/${props.courseId}`
        );
        if (data.code === 200) {
          setClassDetails(data.data.classes);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const getEnrolledCourses = async () => {
      try {
        const { data } = await axios.post(process.env.REACT_APP_ENROLMENTS, {
          learner_email: userEmail,
        });
        console.log(data.data.enrolments);
        setEnrolledCourses(data.data.enrolments);
      } catch(err) {
        console.log(err);
      }
    };
    getClassDetails();
    getEnrolledCourses();
  }, [props.courseId, userEmail]);
  
  const enrolledCourseId = new Set();

  if (enrolledCourses) {
    for(const course of enrolledCourses) {
      if (course.status === "enrolled") {
        enrolledCourseId.add(course.course_id)
      }
    }
  }

  return (
    <Table bordered hover responsive="sm" className={styles.center}>
      <thead>
        <tr>
          <th>Class</th>
          <th>Trainer</th>
          <th>Enrolment Start</th>
          <th>Enrolment End</th>
          <th>Start Date Time</th>
          <th>End Date Time</th>
          <th>Enrolment</th>
        </tr>
      </thead>
      <tbody>
        {classDetails.map((value, key) => {
          let expired =
            new Date(value.enrol_start_datetime).getTime() < now && new Date(value.enrol_end_datetime) > now
              ? false
              : true;
          
          let enrolled = enrolledCourseId.has(courseId) ? true : false;
          return (
            <tr key={key}>
              <td>{value.class_id}</td>
              <td>{value.trainer_name}</td>
              <td>{value.enrol_start_datetime}</td>
              <td>{value.enrol_end_datetime}</td>
              <td>{value.start_datetime}</td>
              <td>{value.end_datetime}</td>
              <td>
                <EnrollButton expire={expired} enrol={enrolled} courseId={props.courseId} classId={value.class_id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CourseTable;
