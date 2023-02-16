import {
  getDocs,
  collection,
  DocumentReference,
  query,
  where,
  limit,
  doc,
  getDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "firebase.config";

import { CategoriesRequests } from "services/categories/requests";

import { IProduct, TProductSort } from "./types";

export const ProductsRequests = {
  getProductById: async function (id: string): Promise<IProduct> {
    try {
      const productRef = doc(db, "products", id);
      const productSnap = await getDoc(productRef);
      const product = productSnap.data() as IProduct;
      const category = await CategoriesRequests.getCategoryByRef(
        product.category as DocumentReference,
      );
      product.category = category;
      const data = { ...product, id: productSnap.id };

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getAllProducts: async function ({ sort }: TProductSort): Promise<IProduct[]> {
    try {
      const collectionRef = collection(db, "products");
      let querySnap;

      if (sort?.field) {
        const { field, order, category } = sort;

        const querySet = category
          ? query(
              collectionRef,
              where("category", "==", doc(db, "сategories", category)),
              orderBy(field, order),
            )
          : query(collectionRef, orderBy(field, order));

        querySnap = await getDocs(querySet);
      } else {
        querySnap = await getDocs(collectionRef);
      }

      const products: IProduct[] = [];
      querySnap.forEach((productDoc) =>
        products.push({ id: productDoc.id, ...productDoc.data() } as IProduct),
      );

      for (let i = 0; i < products.length; i++) {
        const data = await CategoriesRequests.getCategoryByRef(
          products[i].category as DocumentReference,
        );
        products[i].category = data;
      }

      return products;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getPopularProducts: async function (): Promise<IProduct[]> {
    try {
      const collectionRef = collection(db, "products");
      const querySet = query(
        collectionRef,
        where("popularity", ">", 4.1),
        limit(3),
      );
      const querySnap = await getDocs(querySet);

      const popularProducts: IProduct[] = [];
      querySnap.forEach((productDoc) =>
        popularProducts.push({
          id: productDoc.id,
          ...productDoc.data(),
        } as IProduct),
      );

      for (let i = 0; i < popularProducts.length; i++) {
        const data = await CategoriesRequests.getCategoryByRef(
          popularProducts[i].category as DocumentReference,
        );
        popularProducts[i].category = data;
      }

      return popularProducts;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
