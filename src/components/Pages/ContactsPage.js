import React, {useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, filterContacts, postContact, patchContact, deleteExistContact } from '../../redux/contacts/contactsActions';
import ContactForm from '../Contacts/ContactForm/ContactForm';
import Filter from '../Contacts/Filter/Filter';
import ContactList from '../Contacts/ContactList/ContactList';
import {getFriends, getFilter, getFetching} from '../../redux/contacts/contactsSelectors'

const ContactsPage = () => {
  const friends = useSelector(getFriends)
  const filter = useSelector(getFilter)
  const isFetching = useSelector(getFetching)
  const dispatch = useDispatch()

  const handleData = useCallback(() => dispatch(getContacts()), [dispatch])
  const handleInput = useCallback(event => dispatch(filterContacts(event)), [dispatch])
  const handleSubmit = useCallback(contact => dispatch(postContact(contact)), [dispatch])
  const handleUpdate = useCallback((id, contact) => dispatch(patchContact(id, contact)), [dispatch])
  const handleDelete = useCallback(id => dispatch(deleteExistContact(id)), [dispatch])

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        friends={friends}
        handlerSubmit={handleSubmit}
        isFetching={isFetching}
        handlerUpdate={handleUpdate}
      />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onChange={handleInput}
      />
      <ContactList
        friends={friends}
        filter={filter}
        onClick={handleDelete}
        onMount={handleData}
      />
    </div>
  )
}

export default ContactsPage