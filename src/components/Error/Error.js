import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Error.module.scss";

import { Container, Button, Image } from "react-bootstrap";

import fourOfour from "../../assets/fourOfour.svg";

const Error = () => {
  const history = useHistory();

  return (
    <div className={styles.content}>
      <Container className="text-center" fluid>
        <div className={styles.error}>
          <Image src={fourOfour} alt="Error 404" fluid />
          <div className={styles.heading}>Page Not Found</div>
          <div className={styles.text}>Sorry we can’t seem to find what you are looking for.</div>
          <Button variant="primary" onClick={history.goBack}>
            Back to Previous Page
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Error;
