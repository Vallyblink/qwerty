import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FormContainer, Label, Input, ErrorMsg, Button } from './ContactFormStyles';

const FormFormik = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('Required'),
    number: yup
      .number()
      .min(6, 'Too Short!')
      .positive()
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <Form>
        <FormContainer>
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMsg name="number" component="div" />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </Form>
    </Formik>
  );
}

export default FormFormik;