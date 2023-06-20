import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./SocialList.module.css";

import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const SocialList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink target="_blank" to={"https://ru-ru.facebook.com/"}>
        <FiFacebook size={25} color="#313037" />
      </NavLink>
      <NavLink target="_blank" to={"https://twitter.com/?lang=ru"}>
        <FiTwitter size={25} color="#313037" />
      </NavLink>
      <a href="#">
        <BsThreeDots size={25} color="#313037" />
      </a>
    </div>
  );
};

export default SocialList;
