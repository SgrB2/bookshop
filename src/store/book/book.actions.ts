import { createAsyncThunk } from "@reduxjs/toolkit";

import { getBooks as getBooksApi } from "../../api/new/books";
import { getBook as getBookApi } from "../../api/new/book";
import { getBookSlice } from "./book.selector";
import { RootStore } from "./../index";
import { Books } from "./book.types";

export const getBooks = createAsyncThunk("books/getBooks", (arg, thunkAPI) => {
  const { offset } = getBookSlice(thunkAPI.getState() as RootStore);
  return getBooksApi(offset);
});

export const getBook = createAsyncThunk(
  "book/getBook",
  (bookId: Books["isbn13"]) => getBookApi(bookId)
);
