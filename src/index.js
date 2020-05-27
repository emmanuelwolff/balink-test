import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import getStore from './redux/store';
import INITIAL_STATE from './redux/initialState';

const store = getStore(INITIAL_STATE);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

