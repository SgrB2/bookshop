import { Book } from "../../api/types";

export type Books = Book;

export interface State {
  book: Books | null;
  books: Books[];
  loading: boolean;

  offset: number;
}
