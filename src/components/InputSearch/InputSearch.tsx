import React from "react";

import styles from "./InputSearch.module.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const InputSearch: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_input}>
        <input className={styles.input} placeholder="Search" type="text" />
      </div>
      <span className={styles.icon_search}>
        <HiOutlineMagnifyingGlass size={30} color="#313037" />
      </span>
    </div>
  );
};

export default InputSearch;
