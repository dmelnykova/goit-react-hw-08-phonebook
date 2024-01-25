import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Wrapper, Form, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContacts } from '../../redux/operations';
import * as Notiflix from 'notiflix';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      new RegExp(/^\d{3}-\d{2}-\d{2}$/),
      'Phone number must be in the format "000-00-00"'
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

    dispatch(addContacts(values));
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
