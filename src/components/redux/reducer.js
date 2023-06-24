import { combineReducers } from 'redux';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export default rootReducer;