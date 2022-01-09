import React, { Component } from 'react';

class NavBar extends Component {
    

    render () {
        return (<div>
            <i className="navbar-log fas fa-leaf" /> 
            <span> Habit Tracker</span> 
            <span className="navbar-count"> {this.props.totalcount}</span>
        </div>)
    }

}
export default NavBar