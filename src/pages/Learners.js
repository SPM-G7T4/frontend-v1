import React, { useState, useEffect } from "react";
import axios from "axios";

import LearnersTable from "../components/Learners/LearnersTable";

import styles from "../components/Learners/Learners.module.scss";
import { Container, Table, Image } from 'react-bootstrap';

const Learners = () => {
  const [ learners, getLearners ] = useState([]);

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    getAllLearners();
  }, []);

  const getAllLearners = () => {
    axios.get(`${process.env.REACT_APP_LEARNERS}`)

    .then((res) => {
      const allLearners = res.data;
      getLearners(allLearners);
    })
    .catch(err => console.log(err));
  }
  return (
    <>
      <div className={styles.learners}>
        <Container fluid>
          <div className={styles.img}>
            <Image src="http://picsum.photos/1500/300" fluid />
          </div>
          <div className={styles['list-title']}>View Learners</div>
          <div>
          <Table bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <LearnersTable learners={learners} />
            </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </>

  );
};

export default Learners;
