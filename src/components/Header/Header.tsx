import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import LogoBook from "../Images/Bookstore.png";
import UserMenu from "../UserMenu/UserMenu";
import InputSearch from "../InputSearch/InputSearch";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to={`/new-releases-books`}>
        <div>
          <img src={LogoBook} />
        </div>
      </NavLink>
      <InputSearch />
      <UserMenu />
    </div>
  );
};

export default Header;
