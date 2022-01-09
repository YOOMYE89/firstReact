import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0
    }

    // //this 바인딩을 피하기 위함
    // handleIncrement = () => {
    //     // // Habit 객체
    //     // // console.log(this)
    //     // this.setState({ count: this.state.count + 1 })
    // }

    // //this 바인딩을 피하기 위함
    // handleDecrement = () => {
    //     // // Habit 객체
    //     // // console.log(this)
    //     // this.setState({ count: this.state.count > 0 && this.state.count - 1 || 0 })
    // }

    // handleDelete = () => {

    // }

    render() {
        const {name, count} = this.props.habit
        return (
            <>
                <li className="habit">
                    <span className="habit-name"> {name} </span>
                    <span className="habit-count"> {count} </span>
                    <button className="habit-button habit-increase" onClick={this.props.onIncrement(this.props.habit)}>
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <button className="habit-button habit-decrease" onClick={this.props.onDecrement}>
                        <i className="fas fa-minus-square"></i>
                    </button>
                    <button className="habit-button habit-delete" onClick={this.props.onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            </>
        )
    }
}

export default Habit