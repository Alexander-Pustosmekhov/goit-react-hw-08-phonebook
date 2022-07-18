import contactsReducer from './reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = { key: 'contacts', storage, blacklist: ['filter'] };
// const persistedReducer = persistReducer(persistConfig, contactsReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  //   logger,
];

const store = configureStore({
  reducer: { contacts: persistReducer(persistConfig, contactsReducer) },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const storeContacts = { store, persistor };
export default storeContacts;