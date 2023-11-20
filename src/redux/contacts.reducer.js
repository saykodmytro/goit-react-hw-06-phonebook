import { createSlice } from '@reduxjs/toolkit';
import { contactsData } from 'Utils/contactsData';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? contactsData,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContacts': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }

//     case 'contacts/deleteContacts': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const deleteContacts = payload => {
//   return { type: 'contacts/deleteContacts', payload };
// };

// export const addContact = payload => {
//   return {
//     type: 'contacts/addContacts',
//     payload,
//   };
// };
