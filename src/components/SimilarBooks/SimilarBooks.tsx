import React from "react";

import styles from "./SimilarBooks.module.css";
import Title from "../Title/Title";
import { Books } from "../../store/book/book.types";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import BookCard from "../BookCard/BookCard";

interface BooksListProps {
  books: Books[];
  title: string;
}
const SimilarBooks: React.FC<BooksListProps> = ({books, title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_title}>
        <Title title={title} size="medium" />
      </div>
      <div>
      <ul className={styles.wrapper_book}>
        {books.map((book, index) => (
          <li key={index}>
            <BookCard
              title={book.title}
              subtitle={book.subtitle}
              price={book.price}
              image={book.image} 
              link={`/${book.isbn13}`}/>
          </li>
        ))}
      </ul>
       
      </div>
    </div>
  );
};

export default SimilarBooks;
