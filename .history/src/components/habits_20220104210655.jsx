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
        
        return (
            <ul>
                {
                    this
                        .state
                        .habits
                        // .map(habit => (  <Habit key={habit.id} habit={habit}/>))
                        .map(habit => ( console.log(this.state.habits.findIndex(habit.name === 'Reading'))))
                }
            </ul>
        );
    }
}

export default Habits;