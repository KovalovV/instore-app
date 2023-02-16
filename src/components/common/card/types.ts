import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Sizes } from "types/common";

export type TCardBorderRadius = Exclude<Sizes, "xs">;
export type TCardPadding = "xs" | "sm" | "md" | "lg";
export type TCardColor = "gray50";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: TCardColor;
  padding?: TCardPadding;
  borderRadius?: TCardBorderRadius;
}
