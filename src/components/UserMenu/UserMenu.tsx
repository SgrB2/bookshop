import React from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import styles from "./UserMenu.module.css";

import { RiHeartLine, RiUser3Line } from "react-icons/ri";
import { CgShoppingBag } from "react-icons/cg";

const UserMenu: React.FC = () => {
  // const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className={styles.wrapper}>
      <NavLink to={`/fovorites`}>
        <div>
          <span className={styles.icon}>
            <RiHeartLine size={30} color="#313037" />
          </span>
        </div>
      </NavLink>
      <NavLink to={`/cart`}>
        <div>
          <span className={styles.icon}>
            <CgShoppingBag size={30} color="#313037" />
          </span>
        </div>
      </NavLink>
      {/* <NavLink to={`/fovorites`}> */}
      <div>
        <span className={styles.icon}>
          <RiUser3Line size={30} color="#313037" />
        </span>
      </div>
      {/* </NavLink> */}
    </div>
  );
};

export default UserMenu;
