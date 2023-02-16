import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserRequests } from "services/user/requests";
import { ILogin, IRegister, TUpdateUser } from "services/user/types";

import { LocalStorage } from "utils/local-storage";
import { setLoading } from "./slices";

export const googleAuth = createAsyncThunk(
  "user/googleAuth",
  async (_, { dispatch }) => {
    try {
      const { user } = await UserRequests.googleAuth();
      const loggedUser = await UserRequests.getUserById(user.uid);
      const loggedUserData = loggedUser.data();

      return loggedUserData;
    } catch (error) {
      dispatch(setLoading(false));
    }
  },
);

export const login = createAsyncThunk(
  "user/login",
  async (data: ILogin, { dispatch }) => {
    try {
      const { user } = await UserRequests.signInUser(data);
      const loggedUser = await UserRequests.getUserById(user.uid);
      const loggedUserData = loggedUser.data();

      return loggedUserData;
    } catch (error) {
      dispatch(setLoading(false));
    }
  },
);

export const register = createAsyncThunk(
  "user/register",
  async (data: IRegister, { rejectWithValue, dispatch }) => {
    try {
      const { user } = await UserRequests.signUpUser(data);

      await UserRequests.addUser({ id: user.uid, email: data.email });
      const newUser = await UserRequests.getUserById(user.uid);
      const newUserData = newUser.data();

      return newUserData;
    } catch (error) {
      dispatch(setLoading(false));
    }
  },
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (data: TUpdateUser, { dispatch }) => {
    try {
      await UserRequests.updateProfileInfo(data);
      const user = await UserRequests.getUserById(data.id);
      const updatedUserData = user.data();

      return updatedUserData;
    } catch (error) {
      dispatch(setLoading(false));
    }
  },
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { dispatch }) => {
    try {
      await UserRequests.signOutUser();
      LocalStorage.removeAll();
    } catch (error) {
      dispatch(setLoading(false));
    }
  },
);
