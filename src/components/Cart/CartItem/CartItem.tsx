import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  addToCart,
  deleteCartItem,
  minusItem,
} from "../../../store/cart/cart.reducer";

import { Book as IBook } from "../../../api/types";
import styles from "./CartItem.module.css";
import Title from "../../Title/Title";

import { HiOutlinePlusSmall, HiOutlineMinusSmall } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

interface CartItemProps {
  cartItem: IBook;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const totalPrice = `$${(
    cartItem.count * Number(cartItem.price.slice(1))
  ).toFixed(2)}`;

  const handleClickPlus = () => {
    dispatch(addToCart({ isbn13: cartItem.isbn13 }));
  };
  const handleClickMinus = () => {
    dispatch(minusItem(cartItem.isbn13));
  };
  const handleDeleteCartItem = () => {
    dispatch(deleteCartItem(cartItem.isbn13));
  };

  return (
    <li>
      <div className={styles.book_item}>
        <div className={styles.book_pic}>
          <img src={cartItem.image} />
        </div>
        <div className={styles.book_info}>
          <NavLink to={`/${cartItem.isbn13}`} className={styles.link}>
            <Title size="small" title={cartItem.title} />
            <p className={styles.book_authors}>{cartItem.authors}</p>
          </NavLink>
          <div className={styles.book_counter}>
            <button
              className={styles.book_counter_bt}
              onClick={handleClickMinus}
            >
              <HiOutlineMinusSmall size={27} />
            </button>
            <span className={styles.count}>{cartItem.count}</span>
            <button
              className={styles.book_counter_bt}
              onClick={handleClickPlus}
            >
              <HiOutlinePlusSmall size={27} />
            </button>
          </div>
        </div>
        <div className={styles.book_price_wrapper}>
          <span className={styles.book_price}>{totalPrice}</span>
          <span className={styles.book_del} onClick={handleDeleteCartItem}>
            <RxCross2 color="#313037" size={23} />
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
