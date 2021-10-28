import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";

import logo from "../../assets/logo.png";
import person from "../../assets/person-circle.svg";
import { SidebarTabs } from "./SidebarTabs";
import Logout from "../Login/Logout";
import Image from "react-bootstrap/Image";

const Sidebar = () => {
  const isAdmin = sessionStorage.getItem('auth-token') === 'admin' ? true : false;
  const isTrainer = sessionStorage.getItem('auth-token') === 'trainer' ? true : false;
  const name = sessionStorage.getItem('name');
  return (
    <>
      <div className={styles.sidebar}>
        <div>
          <Image src={logo} alt="Logo" className={styles.image} fluid />
        </div>
        <ul>
          {SidebarTabs.map((value, key) => {
            const active = value.link === "/" ? true : false;
            if (isAdmin) {
              return (
                value.permissions.admin && (
                  <li key={key}>
                    <NavLink
                      exact={active}
                      activeClassName={styles.active}
                      to={value.link}
                    >
                      <span className={styles.title}>{value.title}</span>
                    </NavLink>
                  </li>
                  )
              )
            } else if (isTrainer) {
              return (
                value.permissions.trainer && (
                  <li key={key}>
                    <NavLink
                      exact={active}
                      activeClassName={styles.active}
                      to={value.link}
                    >
                      <span className={styles.title}>{value.title}</span>
                    </NavLink>
                  </li>
                  )
              )
            } else {
              return (
                value.permissions.learner && (
                  <li key={key}>
                    <NavLink
                      exact={active}
                      activeClassName={styles.active}
                      to={value.link}
                    >
                      <span className={styles.title}>{value.title}</span>
                    </NavLink>
                  </li>
                  )
              )
            }
          })}
        </ul>
        <div className={styles.user}><img src={person} alt="avatar" />{name}</div>
        <div className={styles.logout}>
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
