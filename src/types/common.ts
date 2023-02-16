export enum Sizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

export type TOrderSort = "desc" | "asc";

export interface ISort<S> {
  sort?: {
    field: S;
    order: TOrderSort;
    category?: string;
  };
}
