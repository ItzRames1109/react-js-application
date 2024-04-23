import styles from "../Styles/AccountSettings.module.css";
import React from "react";

function AccountSettings() {
  return (
    <React.Fragment>
      <p className={styles.heading}>Account Settings</p>
      <div className={styles.container}>
        <div className={styles.imageAndText}>
          <div className={styles.imagecontainer}>
            <img
              src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
              alt="Circular"
              className={styles.circle}
            />
            <i className={`bi bi-camera-fill ${styles.cameraIcon}`}></i>{" "}
          </div>
          <div className={styles.textcontainer}>
            <p className={styles.paraName}>
              <b>Marry Doe</b>
            </p>
            <p className={styles.paraEmail}>Marry@gmail.com</p>
          </div>
        </div>
        <p className={styles.paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          Odit impedit laudantium corporis id sapiente sint dicta temporibus
          numquam exercitationem delectus!
        </p>
        <div className={styles.dottedLine}></div>
        <div className={styles.dottedLine2}></div>
      </div>
    </React.Fragment>
  );
}

export default AccountSettings;
