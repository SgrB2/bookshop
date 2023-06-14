import React, { useState } from "react";

import { Book } from "../../api/types";

import Title from "../Title/Title";
import BooksList from "../BooksList/BooksList";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

interface SearchResultProps {
  title: string;
  onClick: () => void;
  booksSearch: Book[];
}

const SearchResult: React.FC<SearchResultProps> = (props) => {  
  return (
    <div>
      <Title title={`‘${props.title}’  Search results`} size="large" />
      <div>
        <BooksList books={props.booksSearch} />
        <LoadMoreButton onClick={props.onClick} />
      </div>
    </div>
  );
};

export default SearchResult;
