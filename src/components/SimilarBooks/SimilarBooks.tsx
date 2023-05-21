import React from "react";

import styles from "./SimilarBooks.module.css";
import Title from "../Title/Title";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import BookCard from "../BookCard/BookCard";

const SimilarBooks: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_title}>
        <Title title="Similar Books" size="medium" />
        <div>
          <FiArrowLeft size={25} />
          <FiArrowRight size={25} />
        </div>
      </div>
      <div className={styles.wrapper_book}>
        {/* <BookCard title={""} subtitle={""} isbn13={""} price={""} image={""} url={""} news_site={""} summary={""} published_at={""} updated_at={""} featured={true} launches={[]} events={[]} /> */}
       
      </div>
    </div>
  );
};

export default SimilarBooks;
