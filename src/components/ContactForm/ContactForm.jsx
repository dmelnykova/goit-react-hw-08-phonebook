import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Field, ErrorMessage } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { findDuplicates } from '../../helpers/findDuplicates';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      /^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/,
      'Phone number must be min 5 numbers (1234567 or 123-45-67)'
    )
    .required('Required!'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = values => {
    const isDuplicate = findDuplicates(contacts, values);

    if (isDuplicate) {
      return;
    }

    dispatch(addContact(values)); 
  };

  return (
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          handleAddContact(values);
          actions.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange }) => (
          <Form>
            <Field
              id="name"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorMessage name="name" component="span" />

            <Field
              id="number"
              name="number"
              placeholder="Number"
              value={values.number}
              onChange={handleChange}
            />
            <ErrorMessage name="number" component="span" />

            <Button type="submit">Add contact</Button>
          </Form>
        )}
      </Formik>
  );
};
