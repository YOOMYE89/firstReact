import React, { Component } from 'react';

class NavBar extends Component {
    

    render () {
        const allCount = this.props.habits.reduce( (acc, habit) => {return acc + habit.count}, 0)
        return (<>
            Habit Tracker {allCount}
        </>)
    }

}
export default NavBar