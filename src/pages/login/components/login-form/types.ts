import { TFormType } from "pages/login/types";

export interface IField {
  name: string;
  type: string;
  placeholder: string;
}

export interface LoginFormProps {
  formConfig: any;
  fields: IField[];
  formType: TFormType;
  handleFormType: () => void;
}
