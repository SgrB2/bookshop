import React, { useState } from "react";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const [themeName, setThemeName] = useState(
    () => localStorage.getItem("theme") ?? "light"
  );

  const changeTheme = () => {
    const nextThemeName = themeName === "light" ? "dark" : "light";

    setThemeName(nextThemeName);
    localStorage.setItem("theme", nextThemeName);

    document.body.dataset.theme = nextThemeName;
  };
  
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>©2022 Bookstore</p>
      <div className={styles.theme}>
        <label htmlFor="theme">
          <span>
            {themeName}
          </span>
        </label>
        <input type="checkbox" name="theme" id="theme" onChange={changeTheme} />
      </div>
      <p className={styles.text}>All rights reserved</p>
    </div>
  );
};

export default Footer;
