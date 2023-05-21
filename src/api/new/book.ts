import { Book } from "../types";
import { SPACE_API_URL } from "../../consts/conf";

export const getBook = (isbn13: Book["isbn13"]): Promise<Book> => {
  return fetch(`${SPACE_API_URL}/1.0/new/${isbn13}`).then((res) => res.json());
};
