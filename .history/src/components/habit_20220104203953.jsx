import React, {Component} from 'react';

class Habit extends Component {
    state = {
        count: 0
    }

    //this 바인딩을 피하기 위함
    handleIncrement () {
        // Habit 객체
        // console.log(this)
        super.setState({ count: this.state.count + 1})
    }
    
    render () {
        return (
            <>
                <li className="habit">
                    <span className = "habit-name"> Reading </span>
                    <span className = "habit-count"> {this.state.count} </span>
                    <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <button className="habit-button habit-decrease">
                        <i className="fas fa-minus-square"></i>
                    </button>
                    <button className="habit-button habit-delete">
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            </>
        )
    }
}

export default Habit