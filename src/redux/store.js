import contactsReducer from './reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// const persistConfig = { key: 'contacts', storage, blacklist: ['filter'] };

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;
