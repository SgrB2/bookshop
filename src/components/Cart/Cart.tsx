import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDidUpdate } from "../../hooks/useDidUpdate";

import styles from "./Cart.module.css";

import { BsArrowLeft } from "react-icons/bs";
import {
  resetCart,
  addAllBookToCart,
} from "./../../store/cart/cart.reducer";
import { getCartSlice, getTotalPrice } from "../../store/cart/cart.selector";

import Title from "../Title/Title";
import Button from "../Button/Button";
import CartItem from "./CartItem/CartItem";
import EmptyContainer from "../EmptyContainer/EmptyContainer";

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const { cart} = useSelector(getCartSlice);
  const totalPrice = useSelector(getTotalPrice);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      dispatch(addAllBookToCart(JSON.parse(localStorage.getItem("cart") as string)));
    }
  }, []);

  useDidUpdate(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
      {!cart.length ? (
        <EmptyContainer emptyTitle="You don't have any items in your cart." />
      ) : (
        <div className={styles.book_total_wrapper}>
          <div className={styles.book_total_container}>
            <div className={styles.book_total}>
              <div className={styles.total_text}>
                <p>Sum total</p>
                <p>VAT</p>
              </div>
              <div className={styles.total_sum}>
                <p>${(totalPrice).toFixed(2)}</p>
                <p>$12.50</p>
              </div>
            </div>
            <div className={styles.total_price}>
              <span>TOTAL:</span>
              <span>${(totalPrice).toFixed(2)}</span>
            </div>
            <Button
              children="check out"
              size="medium"
              onClick={handleClickRemove}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
