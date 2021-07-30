import ContactItem from '../ContactItem/ContactItem';
import React, { useEffect } from 'react';

const ContactList = ({friends, filter, onClick, onMount}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onMount, [])

  return (
    <ul>
      {friends
        .filter(
          item => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0,
        )
        .map(friend => (
          <ContactItem
            key={friend.id}
            id={friend.id}
            name={friend.name}
            number={friend.number}
            onClick={onClick}
          />
      ))}
    </ul>
  );
}

export default ContactList;
