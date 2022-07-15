import { createStore, combineReducers } from 'redux';
import contactsReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ contacts: contactsReducer });

// const reducer = (state = dataUser, action) => ({
//   contacts: { items: [], filter: '' },
// });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
