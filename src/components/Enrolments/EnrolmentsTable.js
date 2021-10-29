import React, { useState, useEffect } from "react";

import axios from "axios";
import styles from "./Enrolments.module.scss";
import { Table } from "react-bootstrap";

import StatusButton from "./StatusButton";

const EnrolmentsTable = () => {
  const [allEnrolments, setAllEnrolments] = useState([]);

  const fetchAllEnrolments = async () => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    const { data } = await axios.get(process.env.REACT_APP_ENROLMENTS);
    setAllEnrolments(data.data.enrolments);
  };

  useEffect(() => {
    fetchAllEnrolments();
  }, []);

  console.log(allEnrolments);

  return (
    <Table bordered hover responsive="sm" className={styles.center}>
      <thead>
        <tr>
          <th>Email</th>
          <th>Course ID</th>
          <th>Class</th>
          <th>Class Size</th>
          <th>Class Start Datetime</th>
          <th>Class End Datetime</th>
          <th>Trainer Email</th>
          <th>Status</th>
          <th>Approve</th>
        </tr>
      </thead>
      <tbody>
        {allEnrolments.map((value, key) => {
          const disable = value.status === "pending" ? false : true;

          return (
            <tr key={key}>
              <td>{value.learner_email}</td>
              <td>{value.course_id}</td>
              <td>{value.class_id}</td>
              <td>{value.class_size}</td>
              <td>{value.class_start_datetime}</td>
              <td>{value.class_end_datetime}</td>
              <td>{value.trainer_email}</td>
              <td>{value.status === "enrolled" ? "Approved" : "Pending"}</td>
              <td>
                <StatusButton type="approve" status="enrolled" disable={disable} />
                <StatusButton type="reject" status="rejected" disable={disable} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default EnrolmentsTable;
