import React from "react";

import styles from "./SocialList.module.css";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const SocialList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://ru-ru.facebook.com/" target="_blank">
        <FiFacebook size={25} color="#313037" />
      </a>
      <a href="https://twitter.com/?lang=ru" target="_blank">
        <FiTwitter size={25} color="#313037" />
      </a>
      <a href="#">
        <BsThreeDots size={25} color="#313037" />
      </a>
    </div>
  );
};

export default SocialList;
