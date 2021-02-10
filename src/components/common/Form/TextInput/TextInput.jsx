import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import style from "./TextInput.module.css";

const TextInput = ({ ...props }) => {
  const [field, ,] = useField(props);
  return (
    <div className={style.inputContainer}>
      <Field className={style.formInput} type="text" {...field} {...props} />
      <ErrorMessage
        component="div"
        className={style.errorMessage}
        name={props.name}
      />
    </div>
  );
};

export { TextInput };
