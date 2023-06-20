import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductContainer.module.css";

import { BsArrowLeft } from "react-icons/bs";

import SocialList from "../SocialList/SocialList";
import SubscribeContainer from "../Subscribe/Subscribe";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
import ProductCard from "./ProductCard/ProductCard";

import { AppDispatch } from "../../store";
import { getBookSlice } from "../../store/book/book.selector";
import { getBook, getNewBooks } from "../../store/book/book.actions";

const ProductContainer: React.FC = () => {
  const { isbn13 } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { book, newBooks } = useSelector(getBookSlice);

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

  return (
    <div>
      <NavLink to={"/"}>
        <div className={styles.arrow_page}>
          <BsArrowLeft size={40} color="#313037" />
        </div>
      </NavLink>
      {book && <ProductCard bookItem={book} />}
      <SocialList />
      <SubscribeContainer />
      <SimilarBooks books={newBooks} title="Similar Books" />
    </div>
  );
};

export default ProductContainer;
