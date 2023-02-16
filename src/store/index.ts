import { combineReducers } from "redux";
import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "store/user/slices";
import { categoriesReducer } from "store/categories/slices";
import { cartReducer } from "store/cart/slices";

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "user/login/rejected",
          "user/login/fulfilled",
          "user/register/rejected",
          "user/googleAuth/fulfilled",
          "user/updateProfile/fulfilled",
          "user/register/fulfilled",
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
