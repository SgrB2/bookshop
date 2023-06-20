import { RootStore } from "../index";
import { State } from "./cart.types";

export const getCartSlice = (store: RootStore): State => store.cart;

export const getTotalPrice = (store: RootStore): number =>
  store.cart.cart.reduce((total, item) => {
    const price = item.count * Number(item.price.slice(1));
    return total + price;
  }, 0);
