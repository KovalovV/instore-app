import {
  ElementType,
  PropsWithChildren,
  ComponentPropsWithoutRef,
} from "react";

export interface TextCustomProps<C extends ElementType> {
  as?: C;
}

export type TextProps<C extends ElementType> = PropsWithChildren<
  TextCustomProps<C>
> &
  Omit<ComponentPropsWithoutRef<C>, keyof TextCustomProps<C>>;
