import React from "react";

import styles from "./Subscribe.module.css";

import Title from "../Title/Title";
import Button from "../Button/Button";

const SubscribeContainer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <Title title="Subscribe to Newsletter" size="medium" />
        <p className={styles.text}>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
      </div>
      <div>
        <form className={styles.subscribe_form}>
          <input className={styles.subscribe_input} placeholder="Your email" />
          <Button size="small" children="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default SubscribeContainer;
