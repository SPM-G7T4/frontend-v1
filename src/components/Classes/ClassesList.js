import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Classes.module.scss";

import { ClassesAll } from "./ClassesAll"

import { Container, Image, Accordion, Table } from "react-bootstrap";

const ClassesList = () => {
  const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/class/${row.course_id}/${row.class_id}`);
  }
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
              {ClassesAll.map((value, key) => {
                return (
                  <Accordion.Item eventKey={key} key={key}>
                  <Accordion.Header>{value.course_id}: {value.course_name}</Accordion.Header>
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
                      <tr className={styles.clickableRow} onClick={()=> handleRowClick(value)}>
                        <td>{value.class_id}</td>
                        <td>{value.class_size}</td>
                        <td>{value.start_datetime}</td>
                        <td>{value.end_datetime}</td>
                      </tr>
                    </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
                )
              })}
            </Accordion>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ClassesList;
