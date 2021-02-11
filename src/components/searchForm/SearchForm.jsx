import React from "react";
import { Formik, Form } from "formik";
import { FormContainer, InputContainer } from "./SearchForm.styles";
import { searchValidation } from "../../core/validation/search-validation";
import { Button } from "../common/Form/Submit";
import { TextInput } from "../common/Form/TextInput";
import { useHistory } from "react-router-dom";

const SearchForm = () => {
  const initialData = {
    gender: "",
  };
  const history = useHistory();

  const submitHandler = async (values) => {
    history.push(`/search?gender=${values?.gender}`);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialData}
        validationSchema={searchValidation}
        onSubmit={submitHandler}
      >
        <Form>
          <InputContainer>
            <TextInput name="gender" placeholder="جستجوی پیشرفته" />
            <Button background="#dc3545" icon="fa fa-search" />
          </InputContainer>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export { SearchForm };
