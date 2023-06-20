import React from "react";

import styles from "./Input.module.css";
import cn from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  placeholder,
  helperText,
  type,
  error,
  onChange,
}) => {
  return (
    <div className={styles.input_container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={cn(styles.input, { [styles.inputError]: error })}
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default Input;