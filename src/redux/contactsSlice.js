import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  
  extraReducers: {
  [getContacts.pending]: handlePending,
    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload.sort((a, b) => a.name.localeCompare(b.name));
      state.error = null;
    },
    [getContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});
export const contactsReducer = contactsSlise.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// export const ContactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//     addContacts(state, action) {
//       state.items.push(action.payload);
//     },
//     deleteContacts(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const { setFilter, addContacts, deleteContacts } =
//   ContactsSlice.actions;