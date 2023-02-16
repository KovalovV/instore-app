import { createSlice } from "@reduxjs/toolkit";

import { ICategory } from "services/categories/types";

import { getCategories } from "./thunks";

const initialState = {
  categories: [] as ICategory[],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, { type, payload }) => {
      state.categories = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { type, payload }) => {
      state.categories = payload;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const { setCategories } = categoriesSlice.actions;
