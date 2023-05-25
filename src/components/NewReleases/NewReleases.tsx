import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Title from "../Title/Title";
import SubscribeContainer from "../Subscribe/Subscribe";
import BooksList from "../BooksList/BooksList";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

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

const NewReleases: React.FC = () => {
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

  let newBooksList = query ? books : newBooks;

  if (!newBooks.length) return null;

  return (
    <div>
      <Title title="New Releases Books" size="large" />
      <BooksList books={newBooksList} />
      <LoadMoreButton onClick={handleClick} />
      <SubscribeContainer />
    </div>
  );
};

export default NewReleases;
