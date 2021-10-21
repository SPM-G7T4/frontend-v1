import React, { useState, useEffect } from "react";

import axios from "axios";
import { Table } from "react-bootstrap";

const EnrolmentsTable = () => {
  const [allEnrolments, setAllEnrolments] = useState([]);

  const fetchAllEnrolments = async () => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    const { data } = await axios.get(process.env.REACT_APP_ENROLMENTS);
    console.log("CALLING API!!")
    setAllEnrolments(data.data.enrolments);
  };

  useEffect(() => {
    fetchAllEnrolments();
  }, []);

  console.log(allEnrolments);

  return (
    <Table bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Email</th>
          <th>Course ID</th>
          <th>Class</th>
          <th>Class Size</th>
          <th>Class Start Datetime</th>
          <th>Class End Datetime</th>
          <th>Description</th>
          <th>Trainer Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {allEnrolments.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.learner_email}</td>
              <td>{value.course_id}</td>
              <td>{value.class_id}</td>
              <td>{value.class_size}</td>
              <td>{value.class_start_datetime}</td>
              <td>{value.class_end_datetime}</td>
              <td>{value.description}</td>
              <td>{value.trainer_email}</td>
              <td>{value.status === "enrolled" ? "Approved" : "Pending"}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default EnrolmentsTable;
