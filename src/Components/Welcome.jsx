import React from "react";
import styles from "../Styles/Welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <h2>Welcome to PopX</h2>
        <p className={styles.paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link to="/createaccount">
          <button type="button" className={`btn btn-primary ${styles.button1}`}>
            Create Account
          </button>{" "}
        </Link>
        <Link to="/signin">
          <button type="button" className={`btn btn-primary ${styles.button2}`}>
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
