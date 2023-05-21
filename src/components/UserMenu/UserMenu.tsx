import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./UserMenu.module.css";

import { RiHeartLine, RiUser3Line } from "react-icons/ri";
import { CgShoppingBag } from "react-icons/cg";

const UserMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div onClick={() => navigate(`/fovorites`)}>
        <span className={styles.icon}>
          <RiHeartLine size={30} color="#313037" />
        </span>
      </div>
      <div onClick={() => navigate(`/cart`)}>
        <span className={styles.icon}>
          <CgShoppingBag size={30} color="#313037" />
        </span>
      </div>
      <div>
        <span className={styles.icon}>
          <RiUser3Line size={30} color="#313037" />
        </span>
      </div>
    </div>
  );
};

export default UserMenu;
