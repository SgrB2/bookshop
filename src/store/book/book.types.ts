import { Book } from "../../api/types";

export type Books = Book;

export interface State {
  book: Books | null;
  newBooks: Books[],
  books: Books[],
  loading: boolean;

  page:number;
  query: string;
}
