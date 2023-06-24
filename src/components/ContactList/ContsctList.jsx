import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contacts/contactsSlice';
import { ListContainer, ListItem, DeleteButton } from './styledContactList';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleDeleteContact = (id) => {
    dispatch(removeContact(id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ListContainer>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name} : {contact.number}
          <DeleteButton onClick={() => handleDeleteContact(contact.id)}>Delete</DeleteButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ContactList;