import { createSlice } from "@reduxjs/toolkit";
import { State } from "./cart.types";

const initialState: State = {
  totalPrice: "",
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

      state.totalPrice = state.cart.reduce((sum, item) => {
        return item.price.slice(1) * item.count + sum;
      }, 0);
      console.log(state.totalPrice);
    },
    minusItem(state, action) {
      const findBook = state.cart.find(
        (item) => item.isbn13 === action.payload
      );

      if (findBook) {
        findBook.count--;
      }
      state.totalPrice = state.cart.reduce((sum, item) => {
        return item.price.slice(1) * item.count + sum;
      }, 0);
    },
    deleteCartItem(state, action) {
      state.cart = state.cart.filter((item) => item.isbn13 !== action.payload);

      state.totalPrice = state.cart.reduce((sum, item) => {
        return item.price.slice(1) * item.count + sum;
      }, 0);
    },
    resetCart(state) {
      state.cart = [];
      state.totalPrice = "";
    },
  },
});

export const { addToCart, deleteCartItem, minusItem, resetCart } = cart.actions;

export default cart.reducer;
