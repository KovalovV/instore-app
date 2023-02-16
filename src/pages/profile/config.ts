import * as yup from "yup";

export const PROFILE_FORM_FIELD_NAMES = {
  name: "name",
  surname: "surname",
  email: "email",
};

export const PROFILE_FORM_FIELDS = [
  {
    name: PROFILE_FORM_FIELD_NAMES.name,
    type: "text",
    placeholder: "Name",
  },
  {
    name: PROFILE_FORM_FIELD_NAMES.surname,
    type: "text",
    placeholder: "Surname",
  },
  {
    name: PROFILE_FORM_FIELD_NAMES.email,
    type: "text",
    placeholder: "Email",
    disabled: true,
  },
];

export const PROFILE_FORM_VALIDATION_SCHEMA = yup.object().shape({
  [PROFILE_FORM_FIELD_NAMES.email]: yup.string().trim(),
  [PROFILE_FORM_FIELD_NAMES.name]: yup.string().required("Name is required"),
  [PROFILE_FORM_FIELD_NAMES.surname]: yup
    .string()
    .required("Surname is required"),
});
