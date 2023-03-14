import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { selectValueFilter } from 'redux/selectors';
import PropTypes from 'prop-types';

import { List, Item, DelBtn  } from './ContactList.styled';


export function ContactList () {
  const dispatch = useDispatch(); 
  
  const contacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectValueFilter);

  const filtered = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered) {
    return (
      <List>
        {filtered.map(({ id, name, phone }) => (
          <Item key={id}>
            <span>{name}: </span>
            <span>{phone} </span>
            <DelBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              value="delete"
            >Delete</DelBtn>
          </Item>
        ))}
      </List>
    );
  }
}


ContactList.propTypes = {
  contacts: PropTypes.array,
};


