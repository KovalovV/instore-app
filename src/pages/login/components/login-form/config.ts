import * as yup from "yup";

export const SIGN_IN_FORM_FIELD_NAMES = {
  email: "email",
  password: "password",
};

export const SIGN_IN_FORM_INITIAL_VALUES = {
  [SIGN_IN_FORM_FIELD_NAMES.email]: "",
  [SIGN_IN_FORM_FIELD_NAMES.password]: "",
};

export const SIGN_IN_FORM_FIELDS = [
  {
    name: SIGN_IN_FORM_FIELD_NAMES.email,
    type: "text",
    placeholder: "Email",
  },
  {
    name: SIGN_IN_FORM_FIELD_NAMES.password,
    type: "password",
    placeholder: "Password",
  },
];

export const VALIDATION_SCHEMA = yup.object().shape({
  [SIGN_IN_FORM_FIELD_NAMES.email]: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter a valid email")
    .max(64, "Max 62"),
  [SIGN_IN_FORM_FIELD_NAMES.password]: yup
    .string()
    .required("Password is required"),
});
