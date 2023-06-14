import { RootStore } from "../index";
import { State } from "./cart.types";

export const getCartSlice = (store: RootStore): State => store.cartReducer;