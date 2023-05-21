import React from "react";

import styles from "./Pagination.module.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Pagination: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.next_page}>
        <FiArrowLeft size={25} />
        <p className={styles.text}>Prev</p>
      </div>
      <div className={styles.numbers_page}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>6</span>
      </div>
      <div className={styles.next_page}>
        <p className={styles.text}>Next</p>
        <FiArrowRight size={25} />
      </div>
    </div>
  );
};

export default Pagination;
