import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { FilterField } from "../../components/FilterField/Filter";
import { PhoneFormWrapper, FilterListWrapper } from "./ContactsPage.styled";

export default function ContactPage() {
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