import React from "react";

import cn from "classnames";

import styles from "./Title.module.css";

interface TitleProps {
  title: string | any;
  size: "small" | "medium" | "large";
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={cn({
          [styles.small]: props.size === "small",
          [styles.medium]: props.size === "medium",
          [styles.large]: props.size === "large",
        })}
      >
        {props.title}
      </p>
    </div>
  );
};

export default Title;
