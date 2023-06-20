import React from "react";

import styles from "./SignIn.module.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

const SignIn: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.signin_container}>
        <Input label="Email" />
        <Input label="Password" />
        <div className={styles.button}>
          <Button size="large" children="Sign In" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
