import React from "react";

import styles from "./SearchResultPage.module.css";
import Title from "../Title/Title";
import Pagination from "../Pagination/Pagination";
import BookCard from "../BookCard/BookCard";

const SearchResultPage: React.FC = () => {
  return (
    <div>
      <Title title="‘beginners’ Search results" size="large" />
      <p className={styles.text_result}>Found 196 books</p>
      <div className={styles.card_wrapper}>
        {/* {props.books.map((book) => (
          <BookCard
            title={""}
            subtitle={""}
            isbn13={""}
            price={""}
            image={""}
            url={""}
          />
        ))} */}
      </div>
      <Pagination />
    </div>
  );
};

export default SearchResultPage;
