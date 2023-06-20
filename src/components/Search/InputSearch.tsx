import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./InputSearch.module.css";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { setQueryValue } from "../../store/book/book.reducer";

const InputSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispach = useDispatch();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handelSearchClick = () => {
    dispach(setQueryValue(searchValue));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_input}>
        <input
          className={styles.input}
          placeholder="Search"
          type="search"
          value={searchValue}
          onChange={handleValueChange}
        />
      </div>
      <button className={styles.search_button} onClick={handelSearchClick}>
        <HiOutlineMagnifyingGlass size={30} color="#313037" />
      </button>
    </div>
  );
};

export default InputSearch;
