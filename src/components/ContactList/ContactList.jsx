import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts.reducer';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contactsBook.contacts);
  const filter = useSelector(state => state.contactsBook.filter);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p className={css.descrList}>{contact.name}</p>
          <p className={css.descrList}>{contact.number}</p>
          <button
            type="button"
            className={css.btnDel}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
