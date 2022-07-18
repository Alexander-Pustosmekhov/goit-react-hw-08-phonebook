import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App.jsx';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<p>Loading...</p>} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
