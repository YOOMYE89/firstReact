import React, { Component } from 'react';

class NavBar extends Component {
    

    render () {
        const allCount = this.props.habits.reduce( (acc, habit) => {return acc + habit.count}, 0)
        return (<div>
            <i className="navbar-log fas fa-leaf" /> 
            <span> Habit Tracker</span> 
            <span className="navbar-count"> {allCount}</span>
        </div>)
    }

}
export default NavBar