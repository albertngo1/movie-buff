import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'whatwg-fetch';
require('es6-promise').polyfill();

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');

  ReactDOM.render(<App />, root);
});
