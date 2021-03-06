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

  const token = sessionStorage.getItem("auth-token");
  const userEmail = sessionStorage.getItem("email");


  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (token === "learner") {
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
    } else {
      const getTrainerCourses = async () => {
        try {
          const { data } = await axios.post(process.env.REACT_APP_TRAINER, {
            trainer_email: userEmail,
          });
          setEnrolledClasses(data.data.classes)
        } catch (err) {
          console.log(err);
        }
      }
      getTrainerCourses();
    }
  }, [userEmail, token]);

  console.log(enrolledClasses);

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
                const start = token === "learner" ? value.class_start_datetime : value.start_datetime
                const end = token === "learner" ? value.class_end_datetime : value.end_datetime
                const courseName = value.course_id === "REP1101" ? "Printer Concepts and Terminology" : "Printer Operations"
                return (
                  <Accordion.Item eventKey={key} key={key}>
                    <Accordion.Header>
                      {value.course_id}: {courseName}
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
                            <td>{start}</td>
                            <td>{end}</td>
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
