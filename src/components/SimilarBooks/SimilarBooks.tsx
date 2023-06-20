import React, { useMemo, useState } from "react";

import { useParams } from "react-router-dom";
import shuffle from "lodash.shuffle";

import styles from "./SimilarBooks.module.css";

import { Books } from "../../store/book/book.types";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Title from "../Title/Title";
import BooksList from "../BooksList/BooksList";

interface BooksListProps {
  books: Books[];
  title: string;
}
const SimilarBooks: React.FC<BooksListProps> = ({ books, title }) => {
  const [[start, end], setSlide] = useState([0, 3]);

  const { id } = useParams();

  const randomBooks = useMemo(() => shuffle(books).slice(0, 20), [books, id]);

  const rightClick = () => {
    if (end === 20) return;
    const nextStart = start + 1;
    const nextEnd = end + 1;
    setSlide([nextStart, nextEnd]);
  };
  const leftClick = () => {
    if (start === 0) return;
    const nextStart = start - 1;
    const nextEnd = end - 1;
    setSlide([nextStart, nextEnd]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_title}>
        <Title title={title} size="medium" />
        <div className={styles.wrapper_slider}>
          <button className={styles.slider_bt} onClick={leftClick}>
            <BsArrowLeft size={27} />
          </button>
          <button className={styles.slider_bt} onClick={rightClick}>
            <BsArrowRight size={27} />
          </button>
        </div>
      </div>
      <BooksList books={randomBooks.slice(start, end)} />
    </div>
  );
};

export default SimilarBooks;
