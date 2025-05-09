import styles from "./navbar.module.css";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";

export default function navbar() {
  return (
    <div>
      <div className={styles.container}>
              <img
        src="../../images/media_menu.png"
        alt="media_menu"
        height="50px"
        width="50px"
        className={styles.hamburger}
      />
        <div className={styles.tatodiv}>
          <img
            src="../../images/Marketing Association New Zealand.png"
            alt="tato"
            className={styles.tato}
            height="50px"
            width="50px"
          />
          <h1>Marketing Association New Zealand</h1>
        </div>
        <div className={styles.menu}>
          <button className={styles.menubttn}>Menu1</button>
          <button className={styles.menubttn}>Menu2</button>
          <button className={styles.menubttn}>Menu3</button>
          <button className={styles.login}>Login</button>
        </div>
      </div>

    </div>
  );
}
