import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "utils/local-storage";

import { ICartProduct } from "./types";

const cart: ICartProduct[] = LocalStorage.get("cart") || [];
const totalPrice: number = LocalStorage.get("totalPrice") || 0;
const totalQuantity: number = LocalStorage.get("totalQuantity") || 0;

const setCartList = (
  items: ICartProduct[],
  totalPrice: number,
  totalQuantity: number,
) => {
  LocalStorage.set("cart", items);
  LocalStorage.set("totalPrice", totalPrice);
  LocalStorage.set("totalQuantity", totalQuantity);
};

const initialState = {
  cart,
  totalPrice,
  totalQuantity,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { type, payload }) => {
      const itemInCart = state.cart.find((item) => item.id === payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalPrice += +payload.price;

      setCartList(state.cart, state.totalPrice, state.totalQuantity);
    },
    incrementQuantity: (state, { type, payload }) => {
      const item = state.cart.find((item) => item.id === payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }

      setCartList(state.cart, state.totalPrice, state.totalQuantity);
    },
    decrementQuantity: (state, { type, payload }) => {
      const item = state.cart.find((item) => item.id === payload);
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
          state.totalQuantity--;
          state.totalPrice -= item.price;
        }
      }

      setCartList(state.cart, state.totalPrice, state.totalQuantity);
    },
    removeItem: (state, { type, payload }) => {
      const item = state.cart.find((item) => item.id === payload);
      if (item) {
        const { quantity } = item;
        const removeItem = state.cart.filter((item) => item.id !== payload);
        state.cart = removeItem;
        state.totalQuantity -= quantity;
        state.totalPrice -= quantity * item.price;
      }

      setCartList(state.cart, state.totalPrice, state.totalQuantity);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
