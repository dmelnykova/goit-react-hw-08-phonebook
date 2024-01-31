import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { FilterField } from "../../components/FilterField/Filter";
import { PhoneFormWrapper, FilterListWrapper } from "./ContactsPage.styled";

export default function ContactPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); 

  return (
    <PhoneFormWrapper>
      <ContactForm />
      <FilterListWrapper>
        <FilterField />
        <ContactsList />
      </FilterListWrapper>
    </PhoneFormWrapper>
  );
}
