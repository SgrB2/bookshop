import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./BookCard.module.css";

import StarsContainer from "../StarsContainer/StarsContainer";

interface BookCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  link: string;
}

const BookCard: React.FC<BookCardProps> = ({
  image,
  title,
  subtitle,
  price,
  link,
}) => {
  return (
    <NavLink className={styles.link} to={link}>
      <div className={styles.card_info}>
        <div className={styles.card_pic}>
          <img src={image} />
        </div>
        <div className={styles.card_text}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{subtitle}</p>
        </div>
        <div className={styles.card_price_stars}>
          <span className={styles.price}>{price}</span>
          <StarsContainer />
        </div>
      </div>
    </NavLink>
  );
};

export default BookCard;

