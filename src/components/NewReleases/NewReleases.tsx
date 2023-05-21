import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./NewReleases.module.css";

import Title from "../Title/Title";
import Pagination from "../Pagination/Pagination";
import SubscribeContainer from "../Subscribe/Subscribe";
import BooksList from "../BooksList/BooksList";

import { useDidUpdate } from "../../hooks/useDidUpdate";
import { getBookSlice } from "../../store/book/book.selector";
import { getBooks } from "../../store/book/book.actions";
import { AppDispatch } from "../../store";

const NewReleases: React.FC = () => {
  const { books, offset } = useSelector(getBookSlice);
  const dispatch = useDispatch<AppDispatch>();

  useDidUpdate(() => {
    dispatch(getBooks());
  }, [dispatch, offset]);

  useEffect(() => {
    if (books.length !== 0) return;

    dispatch(getBooks());
  }, [books, dispatch]);

  if (!books.length) return null;

  return (
    <div>
      <Title title="New Releases Books" size="large" />
      <div className={styles.card_wrapper}>
        <BooksList books={books} />
      </div>
      <Pagination />
      <SubscribeContainer />
    </div>
  );
};

export default NewReleases;



