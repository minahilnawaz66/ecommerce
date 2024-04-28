import { Cart } from "./Cart";

export interface CartSlice {
  cartOpen: boolean;
  cartItems: CartItem[];
}
