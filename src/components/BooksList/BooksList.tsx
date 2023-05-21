import React from "react";

import BookCard from "../BookCard/BookCard";
import { Books } from "../../store/book/book.types";

interface BooksListProps {
  books: Books[];
}

const BooksList: React.FC<BooksListProps> = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
          <BookCard
          key={book.isbn13}
          title={book.title}
          subtitle={book.subtitle}
          price={book.price}
          image={book.image}
          url={book.url} />
      ))}
    </div>
  );
};

export default BooksList;
