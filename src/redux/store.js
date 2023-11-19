import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './contacts.reducer';

// Поки що використовуємо редюсер який // тільки повертає отриманий стан
const rootReducer = combineReducers({
  contactsStore: contactsReducer,
});

export const store = createStore(rootReducer);
