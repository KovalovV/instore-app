import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "services/user/types";

import { googleAuth, login, register } from "./thunks";

const initialState = {
  userProfile: {} as IUser,
  authModal: false,
  isAuthenticated: false,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, { type, payload }) => {
      return {
        ...state,
        userProfile: payload,
        isAuthenticated: true,
        isLoading: false,
      };
    },
    setLoading: (state, { type, payload }) => {
      state.isLoading = payload;
    },
    setAuthModal: (state, { type, payload }) => {
      state.authModal = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleAuth.pending, (state, { type, payload }) => {
        state.isLoading = true;
      })
      .addCase(googleAuth.fulfilled, (state, { type, payload }) => {
        const userProfile = {
          id: payload.id,
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
        };
        return {
          ...state,
          userProfile,
          isAuthenticated: true,
          isLoading: false,
        };
      })
      .addCase(googleAuth.rejected, (state, { type, payload }) => {
        state.isLoading = true;
      });

    builder
      .addCase(login.pending, (state, { type, payload }) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { type, payload }) => {
        const userProfile = {
          id: payload.id,
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
        };
        return {
          ...state,
          userProfile,
          isAuthenticated: true,
          isLoading: false,
        };
      })
      .addCase(login.rejected, (state, { type, payload }) => {
        state.isLoading = false;
      });

    builder
      .addCase(register.pending, (state, { type, payload }) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { type, payload }) => {
        const userProfile = {
          id: payload.id,
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
        };
        return {
          ...state,
          userProfile,
          isAuthenticated: true,
          isLoading: false,
        };
      })
      .addCase(register.rejected, (state, { type, payload }) => {
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser, setLoading, setAuthModal } = userSlice.actions;
