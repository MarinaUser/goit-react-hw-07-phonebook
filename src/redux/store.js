import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});






// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { ContactsSlice } from './contactsSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   ContactsSlice.reducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);


