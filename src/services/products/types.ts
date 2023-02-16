import { DocumentReference } from "firebase/firestore";

import { ICategory } from "services/categories/types";

import { ISort } from "types/common";

export type TCategories = "" | "" | "";

export interface IProduct {
  id: string;
  title: string;
  price: number;
  popularity: number;
  description: string;
  image: string;
  category: ICategory | DocumentReference;
}

export type TProductSortingFields = "price" | "popularity" | "category";

export type TProductSort = ISort<TProductSortingFields>;
