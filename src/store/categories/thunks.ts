import { createAsyncThunk } from "@reduxjs/toolkit";

import { CategoriesRequests } from "services/categories/requests";

export const getCategories = createAsyncThunk(
  "user/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await CategoriesRequests.getAllCategories();

      return categories;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
