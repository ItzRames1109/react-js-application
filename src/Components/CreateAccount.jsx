import React from "react";
import styles from "../Styles/CreateAccount.module.css";
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <spam className={styles.spam}>Create your</spam>
          <spam className={styles.spam}>PopX account</spam>
        </h2>
        <div className={styles.forms}>
          <div className={styles.inputContainer}>
            <div className={styles.labelContainer}>
              <div className={styles.fullName}>
                Full Name
                <i className={`bi bi-asterisk ${styles.asterisk}`}> </i>{" "}
              </div>
              <input
                className={styles.inputFullName}
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
                required
              />
              <div className={styles.phoneNumber}>
                Phone number
                <i className={`bi bi-asterisk ${styles.asterisk}`}> </i>{" "}
              </div>
              <input
                className={styles.inputPhoneNumber}
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                required
              />
              <div className={styles.emailAddress}>
                {" "}
                Email address
                <i className={`bi bi-asterisk ${styles.asterisk}`}> </i>{" "}
              </div>
              <input
                className={styles.inputEmailAddress}
                type="text"
                id="emailaddress"
                name="emailaddress"
                placeholder="Enter your email address"
                required
              />
              <div className={styles.password}>
                Password
                <i className={`bi bi-asterisk ${styles.asterisk}`}> </i>{" "}
              </div>
              <input
                className={styles.inputPassword}
                type="text"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
              <div className={styles.companyName}>Company name</div>
              <input
                className={styles.inputCompanyName}
                type="text"
                id="companyname"
                name="companyname"
                placeholder="Enter your company name"
              />
              <p className={styles.paragraph}>
                Are you an Agency?
                <i className={`bi bi-asterisk ${styles.asterisk}`}> </i>{" "}
              </p>
              <div className={styles.radioContainer}>
                <input
                  className={styles.radio}
                  type="radio"
                  id="yes"
                  name="option"
                  value="yes"
                />
                <label className={styles.option}>Yes</label>
                <input
                  className={styles.radio}
                  type="radio"
                  id="no"
                  name="option"
                  value="no"
                />
                <label className={styles.option}>No</label>
                <Link to="/accountsettings">
                  <button
                    type="button"
                    className={`btn btn-primary ${styles.button1}`}
                  >
                    Create Account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CreateAccount;
