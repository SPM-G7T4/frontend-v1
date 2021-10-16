import React from "react";

import { EnrolmentsAll } from "./EnrolmentsAll";
import { Table } from "react-bootstrap";

const EnrolmentsTable = () => {
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
        </tr>
      </thead>
      <tbody>
        {EnrolmentsAll.map((value, key) => {
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
              {/* <td>{value.approved ? "Approved" : "Pending"}</td> */}
            </tr>
          );
        })}
      </tbody>
  </Table>
  )
};

export default EnrolmentsTable;