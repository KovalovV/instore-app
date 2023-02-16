import { FormikErrors, FormikValues, FormikTouched } from "formik";

import { InputProps } from "components/ui/input/types";

export interface FormikInputProps extends InputProps {
  name: string;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
}
