import React from "react";

import styles from "./Courses.module.scss";

import { Link, useRouteMatch } from "react-router-dom";

import Tab from "react-bootstrap/Tab";

const CourseTab = (props) => {

  const { url } = useRouteMatch();

  return (
    <Tab.Pane eventKey={props.tab}>
      <div className={styles.listing}>
        {props.courseType.map((value, key) => {
          return (
            <div key={key} className={styles["listing-item"]}>
              <Link to={`${url}/${value.course_id}`}>
                <div className={styles["title"]}>{value.title}</div>
                <div className={styles["subtitle"]}>
                  <span>{value.badge}</span>
                  <span>{value.date}</span>
                  <span>{value.prerequisites}</span>
                </div>
                <div className={styles.desc}>{value.desc}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </Tab.Pane>
  );
};

export default CourseTab;
