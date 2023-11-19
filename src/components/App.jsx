import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './ContactList/ContactList';

import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import PhoneForm from './PhoneForm/PhoneForm';

export const App = () => {
  const contacts = useSelector(state => state.contactsBook.contacts);
  const filter = useSelector(state => state.filteredBook.filter);
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
    const addContactsAction = {
      type: 'contacts/addContacts',
      payload: newContact,
    };
    dispatch(addContactsAction);
  };

  const handleDelete = contactId => {
    const deleteContactsAction = {
      type: 'contacts/deleteContacts',
      payload: contactId,
    };
    dispatch(deleteContactsAction);
  };

  const handleFilterChange = e => {
    const newFilterValue = e.target.value;

    const changeFilterAction = {
      type: 'filtered/Contacts',
      payload: newFilterValue,
    };
    dispatch(changeFilterAction);
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
