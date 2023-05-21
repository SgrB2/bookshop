import React from "react";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>©2022 Bookstore</p>
      <p className={styles.text}>All rights reserved</p>
    </div>
  );
};

export default Footer;
