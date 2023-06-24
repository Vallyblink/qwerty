import React, { useEffect } from "react";
import ContactForm from './Contactform/Contactform';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContsctList';

import { H1, H2 } from './Hstyles';


export default function App() {

  return (
    <div>
      <H1>Phonebook</H1>
      <ContactForm/>

      <H2>Contacts</H2>
      <Filter />
      <ContactList/>
    </div>
  );
}