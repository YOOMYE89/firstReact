import React, { Component } from 'react';

class NavBar extends Component {
    

    render () {
        const allCount = this.props.habits.reduce( (acc, habit) => {return acc + habit.count}, 0)
        return (<div>
            <i className="navbar-log fas fa-leaf" />Habit Tracker {allCount}
        </div>)
    }

}
export default NavBar