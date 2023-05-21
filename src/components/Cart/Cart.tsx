import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";

import { BsArrowLeft } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { HiOutlinePlusSmall, HiOutlineMinusSmall } from "react-icons/hi2";

import Title from "../Title/Title";
import Button from "../Button/Button";
import Img from "../Images/9781491954249.png";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.arrow_page} onClick={() => navigate(-1)}>
        <BsArrowLeft size={40} color="#313037" />
      </div>
      <Title title="Your cart" size="large" />
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
                <div className={styles.book_cunter}>
                  <HiOutlineMinusSmall size={25} />
                  <span>1</span>
                  <HiOutlinePlusSmall size={25} />
                </div>
              </div>
              <div className={styles.book_price_wrapper}>
                <span className={styles.book_price}>$31.38</span>
                <span className={styles.book_del}>
                  <RxCross2 color="#313037" size={23} />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.book_total_wrapper}>
        <div className={styles.book_total_container}>
          <div className={styles.book_total}>
            <div className={styles.total_text}>
              <p>Sum total</p>
              <p>VAT</p>
            </div>
            <div className={styles.total_sum}>
              <p>$ 69.26</p>
              <p>$ 69.26</p>
            </div>
          </div>
          <div className={styles.total_price}>
            <span>TOTAL:</span>
            <span>$81.76 </span>
          </div>
          <Button children="check out" size="medium" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
