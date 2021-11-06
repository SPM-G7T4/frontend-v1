import React from "react";

import styles from "./Learners.module.scss";

// import { Container, Image } from "react-bootstrap";

export default function LearnersTable(props) {
  const getLearners = (props) => {
      // console.log(props.learners);
    const {learners} = props;
    switch(learners.length){
      case 0:
        break
      default:
        console.log('b')
        console.log(props.learners.data)
        const res = props.learners.data;
        return(
          res.learners.map((l,i) => {
            console.log(l);
            return(
              <tr className={styles.learners} key={i}>
                <td>{l.name}</td>
                <td>{l.email}</td>
                <td>{l.department}</td>
                <td>{l.designation}</td>
              </tr>
            )
          })
        )
    }
  }
  return(
    <>
      {getLearners(props)}
    </>
  )
};
