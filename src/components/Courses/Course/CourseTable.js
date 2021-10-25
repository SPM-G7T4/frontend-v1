import React, { useState, useEffect } from "react";

import axios from "axios";

import { Table } from "react-bootstrap";

import EnrollButton from "./EnrollButton";

const CourseTable = (props) => {
  const [classDetails, setClassDetails] = useState([]);
  let now = new Date().toLocaleString();

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
    getClassDetails();
  }, [props.courseId]);

  return (
    <Table bordered hover responsive="sm">
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
          return (
            <tr key={key}>
              <td>{value.class_id}</td>
              <td>{value.trainer_name}</td>
              <td>{value.enrol_start_datetime}</td>
              <td>{value.enrol_end_datetime}</td>
              <td>{value.start_datetime}</td>
              <td>{value.end_datetime}</td>
              <td>
                {value.enrol_start_datetime < now && value.enrol_end_datetime > now && (
                  <EnrollButton />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CourseTable;
