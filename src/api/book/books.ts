import { Book } from "../types";
import { SPACE_API_URL } from "../../consts/conf";

export const getNewBooks = (
): Promise<{
  total: string;
  books: Book[];
}> => {
  return fetch(`${SPACE_API_URL}/1.0/new`).then(
    (res) => res.json()
  );

};

export const getBooks = (
  page: number,
  query: string,
): Promise<{
  total: string;
  books: Book[];
}> => {
  return fetch(`${SPACE_API_URL}/1.0/search/${query}?page=${page}`).then(
    (res) => res.json()
  );

};