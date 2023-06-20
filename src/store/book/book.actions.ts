import { createAsyncThunk } from "@reduxjs/toolkit";

import { getNewBooks as getNewBookApi } from "../../api/book/books";
import { getBooks as getBooksApi } from "../../api/book/books";
import { getBook as getBookApi } from "../../api/book/book";
import { getBookSlice } from "./book.selector";
import { RootStore } from "./../index";
import { Books } from "./book.types";

export const getNewBooks = createAsyncThunk("books/getNewBooks", (arg, thunkAPI) => {
  return getNewBookApi();
});

export const getBook = createAsyncThunk(
  "book/getBook",
  (bookId: Books["isbn13"]) => getBookApi(bookId)
);

export const getBooks = createAsyncThunk("books/getBooks", (arg, thunkAPI) => {
  const { page, query } = getBookSlice(thunkAPI.getState() as RootStore);
  return getBooksApi(page, query);
});