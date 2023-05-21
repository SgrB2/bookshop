import { Book } from "../types";
import { SPACE_API_URL } from "../../consts/conf";

export const getBooks = (
  offset: number
): Promise<{
  error: string;
  total: string;
  page: string;
  books: Book[];
}> => {
  return fetch(`${SPACE_API_URL}/1.0/new?limit=12&offset=${offset}`).then(
    (res) => res.json()
  );
};
