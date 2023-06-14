import { createSlice } from "@reduxjs/toolkit";
import { State } from "./favorites.types";

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
    deleteFavoritestItem(state, action) {
        state.favorites = state.favorites.filter((item) => item.isbn13 !== action.payload);
      },
  },
});

export const { addToFavorites, deleteFavoritestItem } = favorites.actions;

export default favorites.reducer;
