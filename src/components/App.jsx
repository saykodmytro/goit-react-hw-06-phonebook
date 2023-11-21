import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  filteredContact,
} from 'redux/contacts.reducer';
import { ContactList } from './ContactList/ContactList';

import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import PhoneForm from './PhoneForm/PhoneForm';

export const App = () => {
  const contacts = useSelector(state => state.contactsBook.contacts);
  const filter = useSelector(state => state.contactsBook.filter);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    const hasDuplicates = contacts.some(
      contact => contact.name === newContact.name
    );
    if (hasDuplicates) {
      return alert(
        `Oops, product with title '${newContact.name}' already exist!`
      );
    }
    dispatch(addContact(newContact));
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = e => {
    const newFilterValue = e.target.value;
    dispatch(filteredContact(newFilterValue));
  };

  const handlerFilter = () => {
    let searchContact = [];
    if (filter) {
      searchContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      searchContact = contacts;
    }
    return searchContact;
  };

  return (
    <>
      <Container title="Phonebook">
        <PhoneForm handleAddContact={handleAddContact} />
      </Container>
      <Container title="Search">
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      </Container>

      <Container title="Contacts">
        <ContactList contacts={handlerFilter()} handleDelete={handleDelete} />
      </Container>
    </>
  );
};
