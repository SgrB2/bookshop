import React, { useEffect, useMemo } from "react";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Favorires.module.css";

import { BsArrowLeft } from "react-icons/bs";

import Title from "../Title/Title";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
import FavoritesItem from "./FavoritesItem/FavoritesItem";
import EmptyContainer from "../EmptyContainer/EmptyContainer";

import { addAllBookToFavorites } from "./../../store/favorites/favorites.reducer";
import { getBookSlice } from "../../store/book/book.selector";
import { getFavoritesSlice } from "../../store/favorites/favorites.selector";
import { useDidUpdate } from "../../hooks/useDidUpdate";

const Favorites: React.FC = () => {
  const dispatch = useDispatch();

  const { newBooks } = useSelector(getBookSlice);
  const { favorites } = useSelector(getFavoritesSlice);

  useEffect(() => {
    if (localStorage.getItem("favoritesBook")) {
      dispatch(
        addAllBookToFavorites(
          JSON.parse(localStorage.getItem("favoritesBook") as string)
        )
      );
    }
  }, []);

  useDidUpdate(() => {
    localStorage.setItem("favoritesBook", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <NavLink to={`/`}>
        <div className={styles.arrow_page}>
          <BsArrowLeft size={40} color="#313037" />
        </div>
      </NavLink>
      <Title title="Favorites" size="large" />
      {!favorites.length ? (
        <EmptyContainer emptyTitle="You don't have any favorites books" />
      ) : (
        <div className={styles.book_wrapper}>
          <ul>
            {favorites.map((book) => (
              <FavoritesItem favoritesItem={book} key={book.isbn13} />
            ))}
          </ul>
        </div>
      )}
      <SimilarBooks books={newBooks} title="Popular Books" />
    </div>
  );
};

export default Favorites;
