import React from "react";
import styles from "./bottomcards.module.css";
import { Routes, Route, Link } from "react-router-dom";

export default function bottomcards() {
  return (
    <div className={styles.parentdiv}>
      <div className={styles.card1}>
        <img src="../../images/quote.png" alt=""  className={styles.image}/>
        <div>
          <h4>Get a quote</h4>
        </div>
      </div>
      <div className={styles.card2}>
        <img src="../../images/contact.png" alt=""  className={styles.image}/>
        <div>
          <h4>Get in contact</h4>
        </div>
      </div>
      <div className={styles.card3}>
        <img src="../../images/about.png" alt=""  className={styles.image}/>
        <div>
          <h4>About us</h4> 
        </div>
      </div>
    </div>
  );
}
