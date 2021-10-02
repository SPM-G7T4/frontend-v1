import React from "react";

import styles from "./Courses.module.scss";

import { Link } from "react-router-dom";

import Tab from "react-bootstrap/Tab";


const CourseTab = (props) => {
  return (
    <Tab.Pane eventKey={props.tab}>
      <div className={styles.listing}>
        {props.courseType.map((value, key) => {
          return (
            <div key={key} className={styles["listing-item"]}>
              <Link to="">
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
