import React from "react";
import styles from "./aboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutMeTitle}>
        <h3>CLASSIC CUSHIONING. Modern Comfort</h3>
        <p>
          The Nike Air Max Tavas SD Men's Shoe recalls the profile of the iconic
          running original with a Max Air unit in the heel and multi-surface
          Waffle outsole. A lightweight upper and gradient detail offer a
          comfortable fit and dynamic look.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
