import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './index.scss';
import {PersistGate} from 'redux-persist/integration/react';

import {App} from './App';
import {persistor, store} from './store/mainStore';

import './i18next';

const root = ReactDOM.createRoot(
    document.getElementById('root') as unknown as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

