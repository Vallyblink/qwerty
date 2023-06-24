import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contacts/contactsSlice';
import { nanoid } from 'nanoid';
import FormFormik from './FormFormik';

export default function ContactForm (){
  const dispatch = useDispatch();
  
  const contacts = useSelector((state) => state.contacts);

  const handleFormSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const existingContact = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContact) {
      alert('Hey Dude, you already have it');
      return;
    }

    const newContact = { ...values, id: nanoid() };
    console.log (newContact)
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <>
      <FormFormik onSubmit={handleFormSubmit} />
    </>
  );
}