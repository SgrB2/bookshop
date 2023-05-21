import React from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size = "small",
  className,
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={cn(styles[size], className)}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
