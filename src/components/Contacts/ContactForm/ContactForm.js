import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './ContactForm.css';

const ContactForm = ({friends, handlerSubmit, isFetching, handlerUpdate}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleName = ({ target }) => {
    setName(target.value)
  };

  const handleNumber = ({ target }) => {
    setNumber(target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((name === '') || (number === '')) {
      alert('Name and Number are required fields!')
    } else if (
      friends.some(
        item => item.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      const idForUpdate = friends.find(
        item => item.name.toLowerCase() === name.toLowerCase()
      ).id;
      // eslint-disable-next-line no-restricted-globals
      let query = confirm(`${name} is already in contacts! Do you want to update the exist contact?`);
      if (query) {
        const contact = {
          name: name,
          number: number,
        };
        handlerUpdate(idForUpdate, contact);
      } else {
        alert('The contact was left unchanged.')
      }
    } else {
      const contact = {
        id: uuid(),
        name: name,
        number: number,
      };
      handlerSubmit(contact);
    }
    setName('')
    setNumber('')
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={name} onChange={handleName} />
      </label>
      <label>
        Number
        <input name="number" value={number} onChange={handleNumber} />
      </label>
      <button type="submit" disabled={isFetching}>Add contact</button>
    </form>
  );
}

export default ContactForm