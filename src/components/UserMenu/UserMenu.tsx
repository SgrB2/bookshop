import React from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./UserMenu.module.css";

import { RiHeartLine, RiUser3Line } from "react-icons/ri";
import { CgShoppingBag } from "react-icons/cg";
import { BsDot } from "react-icons/bs";

import { getCartSlice } from "../../store/cart/cart.selector";
import { getFavoritesSlice } from "../../store/favorites/favorites.selector";

const UserMenu: React.FC = () => {
  const { cart } = useSelector(getCartSlice);
  const { favorites } = useSelector(getFavoritesSlice);

  return (
    <div className={styles.wrapper}>
      <NavLink to={`/fovorites`}>
        <div className={styles.wrapper_icon}>
          <span className={styles.icon}>
            <RiHeartLine size={30} color="#313037" />
          </span>
          {favorites.length ? (
            <span className={styles.icon_dot}>
              <BsDot size={50} color="#FC857F" />
            </span>
          ) : (
            ""
          )}
        </div>
      </NavLink>
      <NavLink to={`/cart`}>
        <div className={styles.wrapper_icon}>
          <span className={styles.icon}>
            <CgShoppingBag size={30} color="#313037" />
          </span>
          {cart.length ? (
            <span className={styles.icon_dot}>
              <BsDot size={50} color="#FC857F" />
            </span>
          ) : (
            ""
          )}
        </div>
      </NavLink>
      <NavLink to={`/signin`}>
        <div>
          <span className={styles.icon}>
            <RiUser3Line size={30} color="#313037" />
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default UserMenu;
