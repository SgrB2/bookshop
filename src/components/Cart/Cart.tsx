import React from "react";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Cart.module.css";

import { BsArrowLeft } from "react-icons/bs";
import { resetCart } from "./../../store/cart/cart.reducer";
import { getCartSlice } from "../../store/cart/cart.selector";

import Title from "../Title/Title";
import Button from "../Button/Button";
import CartItem from "./CartItem/CartItem";

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const { cart, totalPrice } = useSelector(getCartSlice);

  const handleClickRemove = () => {
    dispatch(resetCart());
  };

  return (
    <div>
      <NavLink to={`/`}>
        <div className={styles.arrow_page}>
          <BsArrowLeft size={40} color="#313037" />
        </div>
      </NavLink>
      <Title title="Your cart" size="large" />
      <div className={styles.book_wrapper}>
        <ul>
          {cart.map((item) => (
            <CartItem cartItem={item} key={item.isbn13} />
          ))}
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
              <p>${+totalPrice.toFixed(2)}</p>
              <p>$12.50</p>
            </div>
          </div>
          <div className={styles.total_price}>
            <span>TOTAL:</span>
            <span>${+totalPrice.toFixed(2)}</span>
          </div>
          <Button
            children="check out"
            size="medium"
            onClick={handleClickRemove}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
