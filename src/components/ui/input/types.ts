import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type TInputSize = "small" | "medium";

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size"
  > {
  size?: TInputSize;
}
