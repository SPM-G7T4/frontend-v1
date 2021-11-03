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
          let status = "warning";
          let statusText = "Pending";
          if (props.status) {
            console.log(value);
            if (value.status === "enrolled") {
              status = "success";
              statusText = "Enrolled";
            } else if (value.status === "rejected") {
              status = "danger";
              statusText = "Rejected";
            }
          }
          return (
            <div key={key} className={styles["listing-item"]}>
              <Link to={`${url}/${value.course_id}`}>
                <div className={styles.flex}>
                  <div
                    className={styles["title"]}
                  >{`${value.course_id}: ${value.course_name}`}</div>
                  {props.status ? (
                    <Badge pill bg={status}>
                      {statusText}
                    </Badge>
                  ) : null}
                </div>
                <div className={styles["subtitle"]}>
                  {value.classes &&
                    value.classes.map((el) => {
                      return (
                        <Badge key={el} pill bg="primary">
                          Class {el}
                        </Badge>
                      );
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
