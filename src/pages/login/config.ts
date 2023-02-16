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

export const SIGN_IN_FORM_VALIDATION_SCHEMA = yup.object().shape({
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

export type TSignInFormValues = typeof SIGN_IN_FORM_INITIAL_VALUES;

// ==================================================================

export const SIGN_UP_FORM_FIELD_NAMES = {
  email: "email",
  password: "password",
  confirmPassword: "confirmPassword",
};

export const SIGN_UP_FORM_INITIAL_VALUES = {
  [SIGN_UP_FORM_FIELD_NAMES.email]: "",
  [SIGN_UP_FORM_FIELD_NAMES.password]: "",
  [SIGN_UP_FORM_FIELD_NAMES.confirmPassword]: "",
};

export const SIGN_UP_FORM_FIELDS = [
  {
    name: SIGN_UP_FORM_FIELD_NAMES.email,
    type: "text",
    placeholder: "Email",
  },
  {
    name: SIGN_UP_FORM_FIELD_NAMES.password,
    type: "password",
    placeholder: "Password",
  },
  {
    name: SIGN_UP_FORM_FIELD_NAMES.confirmPassword,
    type: "password",
    placeholder: "Confirm Password",
  },
];

export const SIGN_UP_FORM_VALIDATION_SCHEMA = yup.object().shape({
  [SIGN_UP_FORM_FIELD_NAMES.email]: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter a valid email")
    .max(64, "Max 62"),
  [SIGN_UP_FORM_FIELD_NAMES.password]: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a special character"),
  [SIGN_UP_FORM_FIELD_NAMES.confirmPassword]: yup
    .string()
    .oneOf(
      [yup.ref(SIGN_UP_FORM_FIELD_NAMES.password)],
      "Passwords do not match",
    )
    .required("Сonfirm password is required"),
});

export type TSignUpFormValues = typeof SIGN_UP_FORM_INITIAL_VALUES;
