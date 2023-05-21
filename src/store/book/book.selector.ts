import { RootStore } from "../index";
import { State } from "./book.types";

export const getBookSlice = (store: RootStore): State => store.books;
