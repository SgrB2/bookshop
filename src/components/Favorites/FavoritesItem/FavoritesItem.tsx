import React from "react";

import styles from "./FavoritesItem.module.css";

import { FaHeart } from "react-icons/fa";

import Img from "../../Images/9781491954249.png";
import StarsContainer from "../../StarsContainer/StarsContainer";
import Title from "../../Title/Title";

const FavoritesItem = () => {
  return (
    <div className={styles.book_item}>
      <div className={styles.book_pic}>
        <img src={Img} />
      </div>
      <div>
        <Title
          size="small"
          title="Robot Operating System (ROS) for Absolute Beginners "
        />
        <p className={styles.book_authors}>by Lentin Joseph, Apress 2018</p>
        <div className={styles.card_price_stars}>
          <span className={styles.price}>$31.38</span>
          <StarsContainer />
        </div>
      </div>
      <div className={styles.book_heart_wrapper}>
        <span className={styles.book_heart}>
          <FaHeart color="#FC857F" size={23} />
        </span>
      </div>
    </div>
  );
};

export default FavoritesItem;
