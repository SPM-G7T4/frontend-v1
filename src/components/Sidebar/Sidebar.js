import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";

import logo from "../../assets/logo.png";
import { SidebarTabs } from "./SidebarTabs";
import Image from 'react-bootstrap/Image'

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div>
          <Image src={logo} alt="Logo" className={styles.image} fluid/>
        </div>
        <ul>
          {SidebarTabs.map((value, key) => {
            const active = value.link === "/" ? true : false;
            return (
              <li key={key}>
                <NavLink exact={active} activeClassName={styles.active} to={value.link}>
                  <span className={styles.title}>{value.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
