import React, { Component } from 'react';
import Habit from './habit';
import AddHabit from './addHabit';

class Habits extends Component {
    state = {
        // habits: [
        //     {
        //         id: 0,
        //         name: 'Reading',
        //         count: 0
        //     }, {
        //         id: 1,
        //         name: 'Running',
        //         count: 0
        //     }, {
        //         id: 2,
        //         name: 'Coding',
        //         count: 0
        //     }

        // ]
    }

    //this 바인딩을 피하기 위함
    handleIncrement = habit => {
        this.props.onIncrement(habit)
    }

    //this 바인딩을 피하기 위함
    handleDecrement = habit => {
        this.props.onDecrement(habit)
    }

    handleDelete = habit => {
        this.props.onDelete(habit)
    }

    render() {
        this.state.habits = this.props.habits
        return (
            <>
                <AddHabit />
                <ul>
                {
                    this
                        .state
                        .habits
                        .map((habit, index) => (<Habit 
                            key={index} 
                            habit={habit} 
                            onIncrement={this.handleIncrement} 
                            onDecrement={this.handleDecrement} 
                            onDelete={this.handleDelete} />))
                    // .map((habit, index) => ( console.log(index)))
                }
                </ul>
            </>
            
        );
    }
}

export default Habits;