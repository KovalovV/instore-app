import { IProduct } from "services/products/types";

export interface ICartProduct extends IProduct {
  quantity: number;
}
