import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Favorires.module.css";

import { BsArrowLeft } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiOutlinePlusSmall, HiOutlineMinusSmall } from "react-icons/hi2";

import Title from "../Title/Title";
import Img from "../Images/9781491954249.png";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
import StarsContainer from "../StarsContainer/StarsContainer";

const Favorites: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.arrow_page} onClick={() => navigate(-1)}>
        <BsArrowLeft size={40} color="#313037" />
      </div>
      <Title title="Favorites" size="large" />
      <div className={styles.book_wrapper}>
        <ul>
          <li>
            <div className={styles.book_item}>
              <div className={styles.book_pic}>
                <img src={Img} />
              </div>
              <div>
                <Title
                  size="small"
                  title="Robot Operating System (ROS) for Absolute Beginners "
                />
                <p className={styles.book_authors}>
                  by Lentin Joseph, Apress 2018
                </p>
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
          </li>
        </ul>
      </div>
      <SimilarBooks />
    </div>
  );
};

export default Favorites;
