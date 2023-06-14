import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./book/book.reducer";
import cartReducer from "./cart/cart.reducer";
import favoritesReducer from "./favorites/favorites.reducer";


const store = configureStore({
  reducer: {
    books: bookReducer,
    cartReducer,
    favoritesReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
