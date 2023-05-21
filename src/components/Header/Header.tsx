import React from "react";

import styles from "./Header.module.css";
import LogoBook from "../Images/Bookstore.png";
import UserMenu from "../UserMenu/UserMenu";
import InputSearch from "../InputSearch/InputSearch";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={LogoBook} />
      </div>
      <InputSearch />
      <UserMenu />
    </div>
  );
};

export default Header;
