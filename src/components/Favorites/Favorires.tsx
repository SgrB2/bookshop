import React, { useMemo } from "react";

import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { shuffle } from "lodash";

import styles from "./Favorires.module.css";

import { BsArrowLeft } from "react-icons/bs";

import Title from "../Title/Title";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
import FavoritesItem from "./FavoritesItem/FavoritesItem";

import { getBookSlice } from "../../store/book/book.selector";
import { getFavoritesSlice } from "../../store/favorites/favorites.selector";

const Favorites: React.FC = () => {
  const { newBooks } = useSelector(getBookSlice);
  const { favorites } = useSelector(getFavoritesSlice);
  const { isbn13 } = useParams();

  const similarBooks = useMemo(
    () => shuffle(newBooks).slice(0, 3),
    [newBooks, isbn13]
  );

  return (
    <div>
      <NavLink to={`/`}>
      <div className={styles.arrow_page}>
        <BsArrowLeft size={40} color="#313037" />
      </div>
      </NavLink>
      <Title title="Favorites" size="large" />
      <div className={styles.book_wrapper}>
        <ul>
          {favorites.map((book) => (
            <FavoritesItem favoritesItem={book} key={book.isbn13} />
          ))}
        </ul>
      </div>
      <SimilarBooks books={similarBooks} title="Popular Books" />
    </div>
  );
};

export default Favorites;
