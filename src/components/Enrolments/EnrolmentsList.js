import React from "react";

import styles from "./Enrolments.module.scss";

// import { EnrolmentsAll } from "./EnrolmentsAll";
import EnrolmentsTable from "./EnrolmentsTable"

import { Container, Image } from "react-bootstrap";

const EnrolmentsList = () => {
  return (
    <>
      <div className={styles.enrolments}>
        <Container fluid>
          <div className={styles.img}>
            <Image src="http://picsum.photos/1500/300" fluid />
          </div>
          <div className={styles["list-title"]}>View Enrolments</div>
          <div>
            <EnrolmentsTable />
          </div>
        </Container>
      </div>
    </>
  );
};

export default EnrolmentsList;
