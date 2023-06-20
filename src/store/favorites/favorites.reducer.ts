import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "./favorites.types";
import { Book } from "../../api/types";

const initialState: State = {
  favorites: [],
};

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const findBook = state.favorites.find(
        (item) => item.isbn13 === action.payload.isbn13
      );

      if (findBook) {
        return;
      }
      if (!findBook) {
        state.favorites = [...state.favorites, action.payload];
      }
    },
    deleteFavoritestItem(state, action: PayloadAction<Book["isbn13"]>) {
      state.favorites = state.favorites.filter(
        (item) => item.isbn13 !== action.payload
      );
    },
    addAllBookToFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { addToFavorites, deleteFavoritestItem, addAllBookToFavorites } =
  favorites.actions;

export default favorites.reducer;
