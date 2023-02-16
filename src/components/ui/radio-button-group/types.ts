import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RadioButtonGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  label: string;
}
