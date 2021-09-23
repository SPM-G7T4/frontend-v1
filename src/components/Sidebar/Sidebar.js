import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";

import logo from "../../assets/logo.png";
import { SidebarTabs } from "./SidebarTabs";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div>
          <img src={logo} alt="Logo" className={styles.image} />
        </div>
        <ul>
          {SidebarTabs.map((value, key) => {
            return (
              <li key={key}>
                <NavLink exact activeClassName={styles.active} to={value.link}>
                  {value.icon}
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
