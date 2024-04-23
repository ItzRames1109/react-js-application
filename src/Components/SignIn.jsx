import styles from "../Styles/SignIn.module.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className={styles.container}>
      {" "}
      <h2 className={styles.h2}>Signin to your PopX account</h2>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form className={styles.forms}>
        <div className={styles.formGroup}>
          <div className={styles.username}>Username</div>
          <input
            className={styles.inputUsername}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <div className={styles.password}>Password</div>
          <input
            className={styles.inputPassword}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <Link to="/accountsettings">
          <button
            type="button"
            className={`btn btn-primary ${styles.button}`}
            style={{ backgroundColor: "#999", width: "93%", marginTop: "10px" }} // Apply Bootstrap classes and custom CSS class
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
export default SignIn;
