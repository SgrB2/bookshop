import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { State } from "./book.types";
import { getBooks, getBook } from "./book.actions";

const initialState: State = {
  book: null,
  books: [],
  loading: false,

  offset: 0,
};

const offsetStep = 12;

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    resetBook: (state) => {
      state.book = null;
    },
    increaseOffset: (state) => {
      state.offset += offsetStep;
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

    builder.addCase(getBook.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBook.fulfilled, (state, action) => {
      state.book = action.payload;
    });
  },
});

export const { resetBook, increaseOffset } = book.actions;

export default book.reducer;
