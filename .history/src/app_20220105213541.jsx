import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

// function App() {
//   // return React.createElement('h1', {}, 'Hello:)~~') 바벨되면 위처럼 보임
//   return <Habits />
// }

class App extends Component {
  state = {
    habits: [
        {
            id: 0,
            name: 'Reading',
            count: 0
        }, {
            id: 1,
            name: 'Running',
            count: 0
        }, {
            id: 2,
            name: 'Coding',
            count: 0
        }

    ]
  }
  
  render() {
    return (<>

      <Habits habits={this.state.habits} />
    </>)
  }
}


export default App;
