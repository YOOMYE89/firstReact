import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './app';
import SimpleHabit from './components/simpleHabit'
import '@fortawesome/fontawesome-free/js/all.js'

ReactDOM.render(
  // use strict 모드처럼 동작하는 mode
  <React.StrictMode>
    {/* <App /> */}
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);
