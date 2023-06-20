import { RootStore } from "../index";
import { State } from "./favorites.types";

export const getFavoritesSlice = (store: RootStore): State => store.favorites;