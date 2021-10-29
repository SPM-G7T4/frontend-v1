import React, { useState } from "react";

import axios from "axios";
import styles from "./Enrolments.module.scss"

import { Button } from "react-bootstrap";

const StatusButton = (props) => {

  const userEmail = sessionStorage.getItem("email");

  const variantType = props.type === "approve" ? "success" : "danger"
  const buttonText = props.type === "approve" ? "Approve" : "Reject"

  const updateStatus = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(process.env.REACT_APP_ENROL, {
        learner_email: props.learnerEmail,
        course_id: props.courseId,
        class_id: props.classId,
        class_start_datetime: "2021-01-07 00:00:00",
        hr_enroler_email: userEmail,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button variant={variantType} onClick={updateStatus} className={styles.button} disabled={props.disable}>
      {buttonText}
    </Button>
  )
}

export default StatusButton
