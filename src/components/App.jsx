import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { Form } from "./Form/Form";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';

import { Title, Contacts } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Title>Phonebook</Title>
      <Form />
      <Contacts>Contacts</Contacts>
      <Filter />
      {isLoading && !error && <Loader/>}
      <ContactList />
    </>
  );
};



