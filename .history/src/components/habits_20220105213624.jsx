import React, { Component } from 'react';
import Habit from './habit';

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
        // // Habit 객체
        // // console.log(this)
        // this.setState({ count: this.state.count + 1 })
        // console.log(`inhandle : ${habit}`)
        const habits = [...this.state.habits]
        // habits.find(v => v.name === habit.name).count++;
        const index = habits.indexOf(habit)
        habits[index].count++
        this.setState({habits})
    }

    //this 바인딩을 피하기 위함
    handleDecrement = habit => {
        // // Habit 객체
        // // console.log(this)
        // this.setState({ count: this.state.count > 0 && this.state.count - 1 || 0 })
        // console.log(`dehandle : ${habit}`)
        const habits = [...this.state.habits]
        // habits.find(v => v.name === habit.name).count++;
        const index = habits.indexOf(habit)
        habits[index].count > 0 && habits[index].count--
        this.setState({habits})
    }

    handleDelete = habit => {
        // console.log(`delhandle : ${habit}`)
        const habits = this.state.habits.filter( item => item.name !== habit.name )
        this.setState({habits})
    }

    render() {

        this.state.habits = this.props.habits
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