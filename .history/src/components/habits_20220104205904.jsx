import React, {Component} from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {
                name: 'Reading',
                count: 0
            }, {
                name: 'Running',
                count: 0
            }, {
                name: 'Coding',
                count: 0
            }

        ]
    }
    render() {
        return (
            <ul>
                {
                    this
                        .state
                        .habits
                        .map(habit => (<Habit key={this.state.habits.indexOf(habit)} habit={habit}/>))
                }
            </ul>
        );
    }
}

export default Habits;