import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render(
  // use strict 모드처럼 동작하는 mode
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
