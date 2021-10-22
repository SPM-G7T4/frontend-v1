import React from "react";

import styles from "./Courses.module.scss";

import { Link, useRouteMatch } from "react-router-dom";

import { Tab, Badge } from "react-bootstrap";

const CourseTab = (props) => {
  const { url } = useRouteMatch();

  return (
    <Tab.Pane eventKey={props.tab}>
      <div className={styles.listing}>
        {props.courseType.map((value, key) => {
          return (
            <div key={key} className={styles["listing-item"]}>
              <Link to={`${url}/${value.course_id}`}>
                <div className={styles["title"]}>{`${value.course_id}: ${value.course_name}`}</div>
                <div className={styles["subtitle"]}>
                  {value.classes && value.classes.map((el) => {
                    return <Badge key={el} pill bg="primary">Class {el}</Badge>;
                  })}
                </div>
                <div className={styles.desc}>{value.description}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </Tab.Pane>
  );
};

export default CourseTab;
