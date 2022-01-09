import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    state = {
        count: 0
    }

    // dom이 마운트 될때
    componentDidMount() {
        console.log(`habit : ${this.props.habit.name} mounted`)
    }

    componentWillUnmount () {
        console.log(`habit : ${this.props.habit.name} unmounted`)
    }

    // //this 바인딩을 피하기 위함
    handleIncrement = () => {
        // // Habit 객체
        // // console.log(this)
        // this.setState({ count: this.state.count + 1 })
        this.props.onIncrement(this.props.habit)
    }

    //this 바인딩을 피하기 위함
    handleDecrement = () => {
        // // Habit 객체
        // // console.log(this)
        // this.setState({ count: this.state.count > 0 && this.state.count - 1 || 0 })
        this.props.onDecrement(this.props.habit)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit)

    }

    render() {
        console.log('habit.jsx')
        const {name, count} = this.props.habit
        return (
            <>
                <li className="habit">
                    <span className="habit-name"> {name} </span>
                    <span className="habit-count"> {count} </span>
                    <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                        <i className="fas fa-minus-square"></i>
                    </button>
                    <button className="habit-button habit-delete" onClick={this.handleDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            </>
        )
    }
}

export default Habit