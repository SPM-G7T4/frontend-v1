import React from "react";

import styles from "./Courses.module.scss";

import { CoursesAll } from './CoursesAll'
import { CoursesEnrolled } from './CoursesEnrolled'
import { CoursesCompleted } from './CoursesCompleted'

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

const Courses = () => {
  return (
    <>
      <div className={styles.courses}>
        <Container fluid>
          <div className={styles.search}>
            <FloatingLabel controlId="floatingInput" label="Search" className="mb-3">
              <Form.Control type="text" name="search" placeholder="Search" />
            </FloatingLabel>
          </div>
          <div className={styles['list-title']}>
            View Courses
          </div>
          <Tab.Container defaultActiveKey="#all" className={styles['nav-pills']}>
            <Row>
              <Col lg={3}>
                <Nav variant="pills" className='flex-column'>
                  <Nav.Item>
                    <Nav.Link eventKey="#all">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="#enrolled">Enrolled</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="#completed">Completed</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="#all">
                    <div className={styles.listing}>
                      {CoursesAll.map((value,key) => {
                        return (
                          <div key={key} className={styles['listing-item']}>
                            <Link to="">
                              <div className={styles['title']}>{value.title}</div>
                              <div className={styles['subtitle']}>
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
                  <Tab.Pane eventKey="#enrolled">
                    <div className={styles.listing}>
                      {CoursesEnrolled.map((value,key) => {
                        return (
                          <div key={key} className={styles['listing-item']}>
                            <a href={value.url}>
                              <div className={styles['title']}>{value.title}</div>
                              <div className={styles['subtitle']}>
                                <span>{value.badge}</span>
                                <span>{value.date}</span>
                                <span>{value.prerequisites}</span>
                              </div>
                              <div className={styles.desc}>{value.desc}</div>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#completed">
                    <div className={styles.listing}>
                      {CoursesCompleted.map((value,key) => {
                        return (
                          <div key={key} className={styles['listing-item']}>
                            <a href={value.url}>
                              <div className={styles['title']}>{value.title}</div>
                              <div className={styles['subtitle']}>
                                <span>{value.badge}</span>
                                <span>{value.date}</span>
                                <span>{value.prerequisites}</span>
                              </div>
                              <div className={styles.desc}>{value.desc}</div>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </>
  );
};

export default Courses;
