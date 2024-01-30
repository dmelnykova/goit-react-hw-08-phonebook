import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { FilterField } from "../../components/FilterField/Filter";
import { PhoneFormWrapper } from "./ContactsPage.styled";

export default function ContactPage() {
  return (
    <PhoneFormWrapper>
      {/* <h2>New Contact</h2> */}
      <ContactForm />
      {/* <Text>Phonebook</Text> */}
      <FilterField />
      <ContactsList />
    </PhoneFormWrapper>
  );
}