import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Error.module.scss";

import Button from "react-bootstrap/Button";

import fourOfour from "../../assets/fourOfour.svg";

const Error = () => {
  const history = useHistory();

  return (
    <div className={styles.content}>
      <div className={styles.error}>
        <h2> Page Not Found </h2>
        <img src={fourOfour} alt="Error 404" />
        <Button variant="primary" onClick={history.goBack}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default Error;
