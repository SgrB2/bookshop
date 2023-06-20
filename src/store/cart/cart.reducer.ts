import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "./cart.types";
import { Book } from "./../../api/types";

const initialState: State = {
  cart: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const findBook = state.cart.find(
        (item) => item.isbn13 === action.payload.isbn13
      );

      if (findBook) {
        findBook.count++;
      }
      if (!findBook) {
        state.cart = [...state.cart, action.payload];
      }
    },
    minusItem(state, action: PayloadAction<Book["isbn13"]>) {
      const findBook = state.cart.find(
        (item) => item.isbn13 === action.payload
      );

      if (findBook) {
        findBook.count--;
      }
    },
    deleteCartItem(state, action: PayloadAction<Book["isbn13"]>) {
      state.cart = state.cart.filter((item) => item.isbn13 !== action.payload);
    },
    resetCart(state) {
      state.cart = [];
    },
    addAllBookToCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteCartItem,
  minusItem,
  resetCart,
  addAllBookToCart,
} = cart.actions;

export default cart.reducer;
