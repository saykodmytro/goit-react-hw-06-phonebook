//=============== After ========================
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts.reducer';
import { filteredReducer } from './filter.reducer';

export const store = configureStore({
  reducer: {
    contactsBook: contactsReducer,
    filteredBook: filteredReducer,
  },
});
