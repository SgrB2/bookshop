import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./FavoritesItem.module.css";

import { FaHeart } from "react-icons/fa";

import { Book } from "../../../api/types";
import { deleteFavoritestItem } from "./../../../store/favorites/favorites.reducer";
import StarsContainer from "../../StarsContainer/StarsContainer";
import Title from "../../Title/Title";

interface FavoritesItemProps {
  favoritesItem: Book;
}

const FavoritesItem: React.FC<FavoritesItemProps> = ({ favoritesItem }) => {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(deleteFavoritestItem(favoritesItem.isbn13));
  };

  return (
    <li>
      <div className={styles.book_item}>
        <div className={styles.book_pic}>
          <img src={favoritesItem.image} />
        </div>
        <div>
          <NavLink to={`/${favoritesItem.isbn13}`} className={styles.link}>
            <Title size="small" title={favoritesItem.title} />
            <p className={styles.book_authors}>{favoritesItem.authors}</p>
          </NavLink>
          <div className={styles.card_price_stars}>
            <span className={styles.price}>{favoritesItem.price}</span>
            <StarsContainer />
          </div>
        </div>
        <div className={styles.book_heart_wrapper}>
          <span className={styles.book_heart} onClick={handleClickDelete}>
            <FaHeart color="#FC857F" size={23} />
          </span>
        </div>
      </div>
    </li>
  );
};

export default FavoritesItem;
