// export const getContacts = state => state.contacts.items;

// export const getFilter = state => state.contacts.filter;

import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectValueFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, valueFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(valueFilter.toLowerCase())
    );
  }
);