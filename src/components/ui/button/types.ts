import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export type TButtonSize = "small" | "medium";
export type TButtonVariant = "blur" | "solid" | "alpha" | "gray";
export type TButtonColor = "white" | "black" | "orange";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: TButtonSize;
  variant?: TButtonVariant;
  color?: TButtonColor;
  fullWidth?: boolean;
}
