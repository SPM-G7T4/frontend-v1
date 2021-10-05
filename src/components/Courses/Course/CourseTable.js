import React, { useState } from "react";

import { Class } from "./Class";
import { Table, Button } from "react-bootstrap";

const CourseTable = () => {

  let now = new Date().toLocaleString();
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Request");

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
                {value.enrolmentStartDateTime < now && (
                  <Button
                    variant="primary"
                    disabled={disable}
                    onClick={() => {
                      setDisable(true);
                      setButtonText("Requested");
                    }}
                  >
                    {buttonText}
                  </Button>
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
