/* eslint-disable react/no-children-prop */
import { FC } from "react";
import { Field, ErrorMessage, useField } from "formik";

import { Input } from "components/ui/input";
import { Text } from "components/common/text";

import { FormikInputProps } from "./types";

import styles from "./formik-input.module.scss";

export const FormikInput: FC<FormikInputProps> = ({
  name,
  errors,
  touched,
  ...props
}) => {
  const [field] = useField(name);

  return (
    <div className={styles.root}>
      <Field
        as={Input}
        value={field.value}
        name={name}
        autoComplete="off"
        {...props}
      />
      <ErrorMessage
        name={name}
        children={(errorMessage) => (
          <Text className={styles.error}>{errorMessage}</Text>
        )}
      />
    </div>
  );
};
