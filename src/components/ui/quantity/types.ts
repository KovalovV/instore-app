import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TQuantitySize = "small" | "medium";

export interface QuantityProps {
  value: number;
  increase: () => void;
  decrease: () => void;
  size?: TQuantitySize;
  className?: string;
}
