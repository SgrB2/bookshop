import React from "react";
import { useNavigate } from "react-router-dom";
import { Books } from "../../store/book/book.types";
import styles from "./BookCard.module.css";

import StarsContainer from "../StarsContainer/StarsContainer";

const BookCard: React.FC<Books> = ({
  image,
  title,
  subtitle,
  price,
}) => {
  return (
    <div className={styles.card_info}>
      <div className={styles.card_pic}>
        <img src={image} />
      </div>
      <div className={styles.card_text}>
        <a className={styles.title}>
          {title}
        </a>
        <p className={styles.text}>{subtitle}</p>
      </div>
      <div className={styles.card_price_stars}>
        <span className={styles.price}>{price}</span>
        <StarsContainer />
      </div>
    </div>
  );
};

export default BookCard;
// {
//   image,
//   url,
//   title,
//   subtitle,
//   price,
//   isbn13,
//   onClick,
// }
