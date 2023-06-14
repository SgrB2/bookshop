import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useDidUpdate } from "../../hooks/useDidUpdate";
import { getBookSlice } from "../../store/book/book.selector";
import { getNewBooks } from "../../store/book/book.actions";
import { getBooks } from "../../store/book/book.actions";

import { AppDispatch } from "../../store";
import {
  increasePage,
  resetPage,
  resetBooks,
} from "../../store/book/book.reducer";
import NewReleases from "../NewReleases/NewReleases";
import SearchResult from "../SearchResult/SearchResult";

const BooksContainer = () => {
  const { newBooks, page, query, books } = useSelector(getBookSlice);

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => dispatch(increasePage());
  

  useDidUpdate(() => {
    if (query) {
      dispatch(getBooks());
    } else {
      dispatch(resetPage());
    }
  }, [query, page]);

  useEffect(() => {
    if (!query) {
      dispatch(resetBooks());
    }
    if (newBooks.length === 0) {
      dispatch(getNewBooks());
    }
  }, [query, dispatch]);

  let booksList = query ? (
    <SearchResult title={query} booksSearch={books} onClick={handleClick} />
  ) : (
    <NewReleases
      title="New Releases Books"
      booksList={newBooks}
    />
  );

  if (!newBooks.length) return null;

  return <>{booksList}</>;
};

export default BooksContainer;
