import React, { Component } from 'react';
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

    //this 바인딩을 피하기 위함
    handleIncrement = habit => {
        // // Habit 객체
        // // console.log(this)
        // this.setState({ count: this.state.count + 1 })
        console.log(`inhandle : ${habit}`)
    }

    //this 바인딩을 피하기 위함
    handleDecrement = habit => {
        // // Habit 객체
        // // console.log(this)
        // this.setState({ count: this.state.count > 0 && this.state.count - 1 || 0 })
        console.log(`dehandle : ${habit}`)
    }

    handleDelete = habit => {
        console.log(`delhandle : ${habit}`)
    }

    render() {

        return (
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
        );
    }
}

export default Habits;