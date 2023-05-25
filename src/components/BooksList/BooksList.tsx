import React from "react";

import styles from "./BooksList.module.css";

import BookCard from "../BookCard/BookCard";
import { Books } from "../../store/book/book.types";

interface BooksListProps {
  books: Books[];
}

const BooksList: React.FC<BooksListProps> = ({ books }) => {
  return (
    <div>
      <ul className={styles.wrapper_book}>
        {books.map((book, index) => (
          <li key={index}>
            <BookCard
              title={book.title}
              subtitle={book.subtitle}
              price={book.price}
              image={book.image} 
              link={`/new-releases-books/${book.isbn13}`}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
