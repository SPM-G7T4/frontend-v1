import React from "react";

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
                {value.icon}
                <span className={styles.title}>{value.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
