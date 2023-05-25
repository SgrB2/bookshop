import React, { useMemo } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { shuffle } from "lodash";

import styles from "./Favorires.module.css";

import { BsArrowLeft } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

import Title from "../Title/Title";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
import FavoritesItem from "./FavoritesItem/FavoritesItem";

import { getBookSlice } from "../../store/book/book.selector";

const Favorites: React.FC = () => {
  const { book, newBooks } = useSelector(getBookSlice);
  const { isbn13 } = useParams();

  const navigate = useNavigate();
  
  const similarBooks = useMemo(
    () => shuffle(newBooks).slice(0, 3),
    [newBooks, isbn13]
  );
  return (
    <div>
      <div className={styles.arrow_page} onClick={() => navigate(-1)}>
        <BsArrowLeft size={40} color="#313037" />
      </div>
      <Title title="Favorites" size="large" />
      <div className={styles.book_wrapper}>
        <ul>
          <li>
           <FavoritesItem/>
          </li>
        </ul>
      </div>
      <SimilarBooks books={similarBooks} title="Popular Books" />
    </div>
  );
};

export default Favorites;
