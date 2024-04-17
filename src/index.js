import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store/index'

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// wrap app component in react-redux Provider component, only wrapped componets and
// their child components will have access to the redux store
// note, the store is provided via the store prop
root.render(<Provider store={store}><App /></Provider>);
