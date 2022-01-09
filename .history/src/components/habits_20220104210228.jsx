import React, {Component} from 'react';
import Habit from './habit';

class Habits extends Component {
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
        console.log(this.state.habits)
        return (
            <ul>
                {
                    this
                        .state
                        .habits
                        .map(habit => (<Habit key={habit.id} habit={habit}/>))
                }
            </ul>
        );
    }
}

export default Habits;