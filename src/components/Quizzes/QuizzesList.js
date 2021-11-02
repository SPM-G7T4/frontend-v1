import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Quizzes.module.scss";

import { Container, Button, Row, Col } from "react-bootstrap";

import Select from 'react-select'

const QuizzesList = () => {
  const history = useHistory();
  const submitAttach = (attach) => {
    history.push(`/quiz/${attach.course_id}/${attach.class_id}/${attach.section_id}`);
  }

  const attach = {
    course_id: '',
    class_id: '',
    section_id: ''
  }

  const handleCourseChange = (props) => {
    attach['course_id'] = props.value;
  }

  const handleClassNoChange = (props) => {
    attach['class_id'] = props.value;
  }

  const handleSectionChange = (props) => {
    attach['section_id'] = props.value;
  }

  const courseOptions = [
    { value: 'REP1101', label: 'REP1101' },
    { value: 'REP1201', label: 'REP1201' },
  ]

  const classOptions = [
    { value: '1', label: 'Class 1' },
  ]

  const sectionOptions = [
    { value: '1', label: 'Types of Printers' },
    { value: '2', label: 'Uses of Printers' },
    { value: '3', label: 'Troubleshooting Fundamentals' },
  ]

  return (
    <Fragment>
      <div className={styles.quizzes}>
        <Container fluid>
          <div className={styles["list-title"]}>Create Quizzes</div>
          <div className={styles["attach-quiz"]} style={{height: "500px"}}>
            <Row>
              <Col lg={4}>
                <div className={styles.label}>Select Course</div>
                <Select options={courseOptions} onChange={handleCourseChange} />
              </Col>
              <Col lg={4}>
                <div className={styles.label}>Select Class</div>
                <Select options={classOptions} onChange={handleClassNoChange} />
              </Col>
              <Col lg={4}>
                <div className={styles.label}>Select Section</div>
                <Select options={sectionOptions} onChange={handleSectionChange} />
              </Col>
            </Row>
            <div className="mt-3 d-flex justify-content-end"><Button variant="primary" onClick={()=> submitAttach(attach)}>Submit</Button></div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default QuizzesList;
