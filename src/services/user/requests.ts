/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  setDoc,
  getDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "firebase.config";

import { ILogin, TAddUser, TUpdateUser } from "./types";

export const UserRequests = {
  getUserById: async function (id: string): Promise<any> {
    try {
      const userRef = doc(db, "users", id);
      const data = await getDoc(userRef);

      return data;
    } catch (error) {
      return error;
    }
  },

  addUser: async function ({ id, email }: TAddUser): Promise<void> {
    try {
      const userData = {
        id,
        email,
        name: "",
        surname: "",
        timestamp: serverTimestamp(),
      };

      await setDoc(doc(db, "users", id), userData);
    } catch (error) {
      Promise.reject(error);
    }
  },

  googleAuth: async function (): Promise<any> {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const data = await signInWithPopup(auth, provider);
      const { user } = data;
      const userSnap = await this.getUserById(user.uid);

      if (!userSnap.exists() && user.email) {
        this.addUser({ id: user.uid, email: user.email });
      }
      return data;
    } catch (error) {
      return error;
    }
  },

  signInUser: async function ({ email, password }: ILogin): Promise<any> {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      return userCredential;
    } catch (error) {
      return error;
    }
  },

  signUpUser: async function ({ email, password }: ILogin): Promise<any> {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      return userCredential;
    } catch (error) {
      return error;
    }
  },

  signOutUser: async function () {
    try {
      const auth = getAuth();
      auth.signOut();
    } catch (error) {
      return error;
    }
  },

  updateProfileInfo: async function (data: TUpdateUser): Promise<any> {
    try {
      const userRef = doc(db, "users", data.id);

      await updateDoc(userRef, data);
    } catch (error) {
      return error;
    }
  },
};
