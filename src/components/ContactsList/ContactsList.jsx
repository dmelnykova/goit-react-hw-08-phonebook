import { useDispatch, useSelector } from 'react-redux';
import { Item, Span, Btn } from './ContactsList.styled';
import { deleteContact } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
// import {
//   selectError,
//   selectIsLoading,
//   selectfilteredContacts,
// } from 'redux/contacts/selectors';
// import { selectVisibleContacts } from '../../redux/selectors';


export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul>
        {contacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <Item key={id}>
              <Span>{name}:</Span>
              <Span>{number}</Span>
              <Btn onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Btn>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};