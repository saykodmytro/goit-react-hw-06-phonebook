import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts.reducer';
import css from './PhoneForm.module.css';

const PhoneForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsBook.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = newContact => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`Oops, contact with name '${newContact.name}' already exists!`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const newName = name.toLowerCase();
  const newNumber = Number.parseFloat(number);

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name: newName,
      number: newNumber,
      id: nanoid(5),
    };
    handleAddContact(newContact);
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  return (
    <form action="" className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="" className={css.lable}>
        <p className={css.titleLable}>Name</p>

        <input
          onChange={handleChange}
          name="name"
          type="text"
          className={css.input}
          value={name}
          required
        />
      </label>
      <p className={css.titleLable}>Number</p>
      <label htmlFor="" className={css.lable}>
        <input
          onChange={handleChange}
          name="number"
          type="text"
          className={css.input}
          value={number}
        />
      </label>
      <button type="submit" className={css.btnForm}>
        Add contact
      </button>
    </form>
  );
};

export default PhoneForm;
