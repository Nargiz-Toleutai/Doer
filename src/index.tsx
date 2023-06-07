import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';

import './i18next';

const root = ReactDOM.createRoot(
  document.getElementById('root') as unknown as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

void reportWebVitals();
