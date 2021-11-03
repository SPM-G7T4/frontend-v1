import React from "react";

import { Link, useParams } from "react-router-dom";

import styles from "./ClassDetails.module.scss";

import { ClassDetailsAll } from "./ClassDetailsAll";
import { Container, Accordion } from "react-bootstrap";

// import arrowRight from "../../../assets/icon-arrow-right.svg"

const ClassDetails = () => {
  const { courseId, classId } = useParams();

  const course = ClassDetailsAll.find((p) => p.course_id === courseId);
  const userType = sessionStorage.getItem("auth-token");

  if (!course) {
    return (
      <div className={styles.course}>
        <h3>No Course Found</h3>
      </div>
    );
  }

  return (
    <>
      <div className={styles.class}>
        <Container fluid>
          <div className={styles.header}>
            <div className="text-primary">Class {classId}</div>
            <div className={styles["title"]}>
              {course.course_id}: {course.course_name}
            </div>
            <div className="pb-3">{course.desc}</div>
          </div>
          <div className={styles.sections}>
            {course.sections.map((el) => {
              return (
                <div key={el.name} className={styles["section-item"]}>
                  <ul>
                    <li>
                      <div className="text-secondary">Section</div>
                      <div className={styles["section-name"]}>{el.name}</div>
                      <div className="text-secondary">{el.description}</div>
                    </li>
                    <Accordion>
                      <Accordion.Item eventKey="0" className="materials">
                        <Accordion.Header>
                          View Course Materials
                        </Accordion.Header>
                        <Accordion.Body>
                          {el.materials.map((el) => {
                            return (
                              <div
                                className={styles["material-item"]}
                                key={el.title}
                              >
                                <span>{el.title}</span>
                                <span>
                                  <a
                                    href={el.view}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                    style={{ marginRight: "10px" }}
                                  >
                                    View
                                  </a>
                                  <a
                                    href={el.download}
                                    className="btn btn-primary"
                                  >
                                    Download
                                  </a>
                                </span>
                              </div>
                            );
                          })}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className="materials">
                        <Accordion.Header>
                          View Created Quizzes
                        </Accordion.Header>
                        <Accordion.Body>
                          {userType === "trainer" ? (
                            <div>
                              <Link
                                to="/quizzes"
                                className="w-100 mb-3 btn btn-primary"
                              >
                                Create Quiz
                              </Link>
                            </div>
                          ) : null}
                          <div>
                            {el.quiz.length > 0 ? "" : "No quizzes created "}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ClassDetails;
