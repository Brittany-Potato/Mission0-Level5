import styles from "./topcontainerwsearch.module.css";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";

export default function topcontainerwsearch() {
  return (
    <div className={styles.mainc}>
        <div className={styles.middlec}>
        <h3>What are you looking for?</h3>
        <input type="search" name="Search" id={styles.search} />
        <button className={styles.searchb}>Search</button>
        </div>
    </div>
  )
}
