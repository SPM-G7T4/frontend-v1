import React, { useState, useEffect } from "react";

import axios from "axios";

import { Button } from "react-bootstrap";

const EnrollButton = (props) => {
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Enrol");

  const userEmail = sessionStorage.getItem("email");
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (props.expire) {
      setButtonText("Expired");
      setDisable(true);
    } else if (props.enrol) {
      setButtonText("Enrolled");
      setDisable(true);
    } else {
      setButtonText("Rejected");
      setDisable(true);
    }
  }, [props.expire, props.enrol]);

  const enrolClass = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(process.env.REACT_APP_ENROL, {
        learner_email: userEmail,
        course_id: props.courseId,
        class_id: props.classId,
        class_start_datetime: "2021-01-07 00:00:00",
      });
      if (data.code === 201) {
        setDisable(true);
        setButtonText("Enrolled");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button variant="primary" disabled={disable} onClick={enrolClass}>
      {buttonText}
    </Button>
  );
};

export default EnrollButton;
