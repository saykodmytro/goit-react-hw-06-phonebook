import ContactList from './ContactList/ContactList';

import { Container } from './Container/Container';
import Filter from './Filter/Filter';
import PhoneForm from './PhoneForm/PhoneForm';

export const App = () => {
  return (
    <>
      <Container title="Phonebook">
        <PhoneForm />
      </Container>
      <Container title="Search">
        <Filter />
      </Container>

      <Container title="Contacts">
        <ContactList />
      </Container>
    </>
  );
};
