import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Classes.module.scss";
import axios from "axios";

import { Container, Image, Accordion, Table } from "react-bootstrap";

const ClassesList = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/class/${row.course_id}/${row.class_id}`);
  };

  const userEmail = sessionStorage.getItem("email");

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const getEnrolledCourses = async () => {
      try {
        const { data } = await axios.post(process.env.REACT_APP_ENROLMENTS, {
          learner_email: userEmail,
        });
        setEnrolledClasses(data.data.enrolments.filter((enrolment) => enrolment.status === "enrolled"));
      } catch (err) {
        console.log(err);
      }
    };
    getEnrolledCourses();
  }, [userEmail]);

  console.log(enrolledClasses);

  if (enrolledClasses.length === 0) {
    return (
      <h3
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No classes enrolled
      </h3>
    );
  }

  return (
    <>
      <div className={styles.classes}>
        <Container fluid>
          <div className={styles.img}>
            <Image src="http://picsum.photos/1500/300" fluid />
          </div>
          <div className={styles["list-title"]}>View Classes</div>
          <div className={styles.accordion}>
            <Accordion>
              {enrolledClasses.map((value, key) => {
                return (
                  <Accordion.Item eventKey={key} key={key}>
                    <Accordion.Header>
                      {value.course_id}: {value.course_name}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table bordered hover responsive="sm">
                        <thead>
                          <tr>
                            <th>Class ID</th>
                            <th>Class Size</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            className={styles.clickableRow}
                            onClick={() => handleRowClick(value)}
                          >
                            <td>{value.class_id}</td>
                            <td>{value.class_size}</td>
                            <td>{value.class_start_datetime}</td>
                            <td>{value.class_end_datetime}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ClassesList;
