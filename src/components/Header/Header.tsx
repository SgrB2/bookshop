import React from "react";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./Header.module.css";
import LogoBook from "../Images/Bookstore.png";
import UserMenu from "../UserMenu/UserMenu";
import InputSearch from "../Search/InputSearch";

import {resetQuery} from "./../../store/book/book.reducer";

const Header: React.FC = () => {
  const dispach = useDispatch();

  return (
    <div className={styles.wrapper}>
      <NavLink to={`/`} onClick={() => dispach(resetQuery())}>
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
