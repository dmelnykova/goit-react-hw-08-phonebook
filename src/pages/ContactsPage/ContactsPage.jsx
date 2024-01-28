import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { FilterField } from "../../components/FilterField/Filter";
import { PhoneFormWrapper } from "./ContactsPage.styled";

export default function ContactPage() {
  return (
    <PhoneFormWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterField />
      <ContactsList />
    </PhoneFormWrapper>
  );
}