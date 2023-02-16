import {
  getDocs,
  collection,
  DocumentReference,
  getDoc,
} from "firebase/firestore";
import { db } from "firebase.config";

import { ICategory } from "./types";

export const CategoriesRequests = {
  getCategoryByRef: async function (
    ref: DocumentReference,
  ): Promise<ICategory> {
    try {
      const categorySnap = await getDoc(ref);
      const data = { id: categorySnap.id, ...categorySnap.data() };

      return data as ICategory;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getAllCategories: async function (): Promise<ICategory[]> {
    try {
      const collectionRef = collection(db, "сategories");
      const querySnap = await getDocs(collectionRef);

      const categories: ICategory[] = [];
      querySnap.forEach((document) =>
        categories.push({
          id: document.id,
          ...document.data(),
        } as ICategory),
      );

      return categories;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
