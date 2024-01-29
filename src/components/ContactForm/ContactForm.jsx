import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Wrapper, Form, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import * as Notiflix from 'notiflix';

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
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (checkContact) {
      Notiflix.Report.warning('Contact has not been added.', `${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values)); 
  };

  return (
    <Wrapper>
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
            <label>Name</label>
            <Field
              id="name"
              name="name"
              placeholder="Tom"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorMessage name="name" component="span" />

            <label>Number</label>
            <Field
              id="number"
              name="number"
              placeholder="000-00-00"
              value={values.number}
              onChange={handleChange}
            />
            <ErrorMessage name="number" component="span" />

            <Button type="submit">Add contact</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};