import React from 'react';
import './app.css';
import Habits from './components/habits';

function App() {
  // return React.createElement('h1', {}, 'Hello:)~~') 바벨되면 위처럼 보임
  return <Habits />
}

export default App;
