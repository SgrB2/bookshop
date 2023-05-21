import { ThunkMiddleware, configureStore } from "@reduxjs/toolkit";

import bookReducer from "./book/book.reducer";

// const logger: ThunkMiddleware = (store) => (next) => (action) => {
//   return next(action);
// };

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;