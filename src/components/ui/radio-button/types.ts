import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface RadioButtonProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
