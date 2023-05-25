import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { State } from "./book.types";
import { getNewBooks, getBook, getBooks } from "./book.actions";

const initialState: State = {
  book: null,
  books: [],
  newBooks: [],
  loading: false,

  page: 1,
  query: "",
};

const step = 1;

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    resetBook: (state) => {
      state.book = null;
    },
    resetBooks: (state) => {
      state.books = [];
    },
    increasePage: (state) => {
      state.page += step;
    },
    setQueryValue: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    resetPage: (state) => {
      state.page = initialState.page;
    },
  },
  extraReducers(builder) {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = state.books.concat(action.payload.books);
      state.loading = false;
    });

    builder.addCase(getNewBooks.fulfilled, (state, action) => {
      state.newBooks = action.payload.books;
    });

    builder.addCase(getBook.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBook.fulfilled, (state, action) => {
      state.book = action.payload;
    });
  },
});

export const { resetBook, resetBooks, increasePage, resetPage, setQueryValue } =
  book.actions;

export default book.reducer;
