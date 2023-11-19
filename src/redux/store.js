import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './contacts.reducer';
import { filteredReducer } from './filter.reducer';

const rootReducer = combineReducers({
  contactsBook: contactsReducer,
  filteredBook: filteredReducer,
});

export const store = createStore(rootReducer);
