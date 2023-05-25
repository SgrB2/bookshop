import React, { useState, useEffect, useMemo } from "react";

import styles from "./ProductContainer.module.css";

import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import shuffle from "lodash.shuffle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SocialList from "../SocialList/SocialList";
import SubscribeContainer from "../Subscribe/Subscribe";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
import ProductCard from "./ProductCard/ProductCard";


import { AppDispatch } from "../../store";
import { getBookSlice } from "../../store/book/book.selector";
import { getBook, getNewBooks } from "../../store/book/book.actions";

const ProductContainer: React.FC = () => {
  const navigate = useNavigate();

  const { isbn13 } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { book, newBooks } = useSelector(getBookSlice);

  // const params = useParams<{ isbn13: string }>();

  const similarBooks = useMemo(
    () => shuffle(newBooks).slice(0, 3),
    [newBooks, isbn13]
  );
  useEffect(() => {
    if (!isbn13) return () => {};

    dispatch(getBook(isbn13));

    return () => dispatch(getBook());
  }, [dispatch, isbn13]);

  useEffect(() => {
    if (newBooks.length === 0) {
      dispatch(getNewBooks());
    }
  }, [newBooks, dispatch]);
console.log(book)
  return (
    <div>
      <div className={styles.arrow_page} onClick={() => navigate(-1)}>
        <BsArrowLeft size={40} color="#313037" />
      </div>
      {book && <ProductCard bookItem={book} />}
      <SocialList />
      <SubscribeContainer />
      <SimilarBooks books={similarBooks} title="Similar Books" />
    </div>
  );
};

export default ProductContainer;
