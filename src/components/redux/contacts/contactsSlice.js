import { createSlice } from '@reduxjs/toolkit';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    removeContact: (state, action) => {
      state = state.filter((contact) => contact.id !== action.payload);
    },
    selectContact: (state, action) => {
      state.selectedContact = action.payload;
    },
    loadContacts: (state, action) => {
      state = action.payload;
    },
  },
});

export const { addContact, removeContact, selectContact, loadContacts } = contactsSlice.actions;

export default contactsSlice.reducer;