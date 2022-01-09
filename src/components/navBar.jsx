import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    

    render () {
        console.log('navBar.jsx')
        return (<div className="navbar">
            <i className="navbar-logo fas fa-leaf" /> 
            <span> Habit Tracker</span> 
            <span className="navbar-count"> {this.props.totalcount}</span>
        </div>)
    }

}
export default NavBar