import React from "react";

import { Class } from "./Class";
import { Table } from "react-bootstrap";

import EnrollButton from "./EnrollButton";

const CourseTable = () => {

  let now = new Date().toLocaleString();

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
        {Class.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.classId}</td>
              <td>{value.trainerName}</td>
              <td>{value.enrolmentStartDateTime}</td>
              <td>{value.enrolmentEndDateTime}</td>
              <td>{value.startDateTime}</td>
              <td>{value.endDateTime}</td>
              <td>
                {value.enrolmentStartDateTime < now && value.enrolmentEndDateTime > now && (
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
