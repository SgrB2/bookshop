import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./book/book.reducer";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
