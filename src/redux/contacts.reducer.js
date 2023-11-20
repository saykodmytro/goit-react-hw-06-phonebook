import { contactsData } from 'Utils/contactsData';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? contactsData,
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContacts': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }

    case 'contacts/deleteContacts': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export const deleteContacts = payload => {
  return { type: 'contacts/deleteContacts', payload };
};

export const addProduct = payload => {
  return {
    type: 'contacts/addContacts',
    payload,
  };
};
