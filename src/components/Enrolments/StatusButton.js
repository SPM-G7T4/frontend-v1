import React, { useState } from "react";

import axios from "axios";
import styles from "./Enrolments.module.scss"

import { Button } from "react-bootstrap";

const StatusButton = (props) => {
  const [disable, setDisable] = useState(props.disable);
  const userEmail = sessionStorage.getItem("email");

  const variantType = props.type === "approve" ? "success" : "danger"
  const buttonText = props.type === "approve" ? "Approve" : "Reject"

  const updateStatus = async () => {
    try {
      axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
      const { data } = await axios.put(process.env.REACT_APP_APPROVE, {
        learner_email: props.learnerEmail,
        course_id: props.courseId,
        class_id: props.classId,
        class_start_datetime: "2021-01-07 00:00:00",
        approver_email: userEmail,
        status: "enrolled"
      });
      
      if (data.code === 200) {
        setDisable(true);
      } 

    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Button variant={variantType} onClick={updateStatus} className={styles.button} disabled={disable}>
      {buttonText}
    </Button>
  )
}

export default StatusButton
